import { Component, ComponentConstructor, ComponentSchema } from "./Component"
import { Entity } from "./Entity"

type Query = { [systemID: string]: { componentIDs: string[], entities: Entity[] } }

export class EntityComponentManager {
    public queries: Query
    public entities: Entity[]

    constructor() {
        this.queries = {}
        this.entities = []
    }

    public getQuery(id: string, components: ComponentConstructor<any, any>[]) {
        if (!(id in this.queries)) this.queries[id] = { componentIDs: components.map(c => c.typeID), entities: [] }
        return this.queries[id].entities
    }

    public createEntity() {
        const entity = new Entity(this, crypto.randomUUID(), [], [])
        this.entities.push(entity)
        return entity
    }

    public addEntityComponent<T extends ComponentSchema, C extends Component<T>>(entity: Entity | string, component: ComponentConstructor<T, C>, data: T) {
        if (!component.typeID) component.typeID = crypto.randomUUID()
        const typeID = component.typeID

        entity = typeof entity === "string" ? this.entities.find(e => e.id === entity) as Entity : entity
        if (entity.componentTypes.includes(typeID)) return this// Component already exists

        const c = new component(data)
        entity.components.push(c)
        entity.componentTypes.push(typeID)

        // check if entity needs to be put into query
        for (const id in this.queries) {
            const q = this.queries[id]
            const cIds = q.componentIDs
            if (!q.entities.includes(entity) && cIds.every(i => (entity as Entity).componentTypes.includes(i))) {
                q.entities.push(entity)
            }
        }

        return this
    }
}


// Stolen from:
// https://stackoverflow.com/questions/6122571/simple-non-secure-hash-function-for-javascript
/**
 * Returns a hash code from a string
 * @param  {String} str The string to hash.
 * @return {Number}    A 32bit integer
 * @see http://werxltd.com/wp/2010/05/13/javascript-implementation-of-javas-string-hashcode-method/
 */
export function hashCode(str: string): number {
    let hash = 0;
    for (let i = 0, len = str.length; i < len; i++) {
        let chr = str.charCodeAt(i);
        hash = (hash << 5) - hash + chr;
        hash |= 0; // Convert to 32bit integer
    }
    return hash;
}