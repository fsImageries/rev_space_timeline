import { ComponentConstructor } from "./Component";
import { Entity } from "./Entity";
import { System } from "./System";

export type QueryElements = { entityQuery: ComponentQueryState[]; entities: Entity[] }[];
export type Query = { [systemID: string]: QueryElements };
export type ComponentQueryState = [string, boolean, boolean];


export interface QueryOperand {
    operand: string;
    value: ComponentConstructor<any, any>
}

export class QueryManager {
    public queries: Query;

    constructor() {
        this.queries = {}
    }

    private stateFromOperands(operands: QueryOperand[]): ComponentQueryState[] {
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

            // needs more thought
            // if (shouldSelf) return false

            // check that component exists
            if (!ids.includes(id)) return false

            return true
        })
    }

    /* eslint-disable @typescript-eslint/no-explicit-any*/
    public getQuery(sys: System) {
        const that = (sys.constructor as typeof System)
        const id = that.typeID
        if (!(id in this.queries)) {
            this.queries[id] = that.queries.map(opers => {
                return {
                    entityQuery: this.stateFromOperands(opers),
                    entities: []
                }
            })
        }
        // pass the entity list to the querying component and fill it everytime a component is added
        return this.queries[id];
    }

    public updateQuery(entity: Entity) {
        // check if entity needs to be put into query
        for (const id in this.queries) {
            const query = this.queries[id];
            for (const q of query) {
                if (!q.entities.includes(entity) && this.validateEntityState(entity, q.entityQuery)) q.entities.push(entity)
                // const cIds = q.componentIDs;
                // if (cIds.length != 0 && !q.entities.includes(entity) && cIds.every((i) => i in (entity as Entity).components)) {
                //     q.entities.push(entity);
                // }
            }
        }
    }

}