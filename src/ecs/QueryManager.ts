import { TComponent } from "./Component";
import { Entity } from "./Entity";
import { System } from "./System";
import { World } from "./World";


export type QueryElements = { entityQuery: ComponentQueryState[]; entities: Entity[] }[];
export type Query = { [systemID: string]: QueryElements };
export type ComponentQueryState = [string, boolean, boolean];

export interface QueryOperand {
    operand: string;
    value: TComponent
}

export const operand = (o: string, c: TComponent):QueryOperand => {return {operand: o, value: c}}

export class QueryManager {
    public sysQueries: Query;
    public compQueries:  Query;
    public world: World;

    constructor(world: World) {
        this.sysQueries = {}
        this.compQueries = {}
        this.world = world
    }

    private stateFromOperands(operands: QueryOperand[], self?:TComponent): ComponentQueryState[] {
        const entityState: ComponentQueryState[] = []
        for (const operand of operands) {
            // State: [componentID, shouldExist, shouldSelf]
            // TODO combine operands?
            switch (operand.operand) {
                case "exist": {
                    entityState.push([operand.value.typeID, true, false])
                    break
                };
                case "!exist": {
                    entityState.push([operand.value.typeID, false, false])
                    break
                };
                case "self": {
                    if (self)
                    entityState.push([self.typeID, true, false])
                    entityState.push([operand.value.typeID, true, true])
                    break
                }
            }
        }
        return entityState
    }

    private validateEntityState(entity: Entity, state: ComponentQueryState[]) {
        const ids = Object.keys(entity.components)
        return state.every(query => {
            const [id, shouldExist, _shouldSelf] = query
            // check if component should exist
            if (!shouldExist && ids.includes(id)) return false

            // TODO needs to fire on component query
            // needs more thought
            // if (shouldSelf) return false

            // check that component exists
            if (!ids.includes(id)) return false

            return true
        })
    }

    public getSystemQuery(sys: System) {
        const that = (sys.constructor as typeof System)
        const id = that.typeID
        if (!(id in this.sysQueries)) {
            this.sysQueries[id] = that.queries.map(opers => {
                return {
                    entityQuery: this.stateFromOperands(opers),
                    entities: []
                }
            })
        }
        return this.sysQueries[id];
    }

    public getComponentQuery(component:TComponent) {
        if (component.dependencies.length === 0) return
        const id = component.typeID
        if (!(id in this.compQueries)) {
            this.compQueries[id] = component.dependencies.map(opers => {
                return {
                    entityQuery: this.stateFromOperands([opers], component),
                    entities: []
                }
            })
        }
        return this.compQueries[id];
    }

    public queryComponentQueries() {
        for (const entity of this.world.ecManager.entities) {
            this.updateQueries(entity, this.compQueries)
        }
    }

    public updateQueries(entity: Entity, queries?:Query) {
        if (!queries) queries = this.sysQueries
        // check if entity needs to be put into query
        for (const id in queries) {
            const query = queries[id];
            for (const q of query) {
                if (!q.entities.includes(entity) && this.validateEntityState(entity, q.entityQuery)) q.entities.push(entity)
            }
        }
    }
}