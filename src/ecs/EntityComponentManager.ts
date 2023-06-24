import { Component, ComponentConstructor, ComponentSchema } from "./Component"
import { Entity } from "./Entity"
import { queryKey } from "./System"

type ComponentQueries = { [propName: number]: Entity[] }

export class EntityComponentManager {
    public queries: ComponentQueries
    public entities: Entity[]

    constructor() {
        this.queries = {}
        this.entities = []
    }

    public getQuery(key: number) {
        if (!(key in this.queries)) this.queries[key] = []
        return this.queries[key]
    }

    public createEntity() {
        const entity = new Entity(this, crypto.randomUUID(), [], [])
        this.entities.push(entity)
        return entity
    }

    public addEntityComponent<T extends ComponentSchema, C extends Component<T>>(entity: Entity | string, component: ComponentConstructor<T, C>, data:T) {
        // We assume that all queries are exclusive \
        // means the matches need to be 1 to 1 to match an entity to an system
 
        if (!component.typeID) component.typeID = crypto.randomUUID()
        const typeID = component.typeID

        entity = typeof entity === "string" ? this.entities.find(e => e.id === entity) as Entity : entity
        if (entity.componentTypes.includes(typeID)) return this// Component already exists

        // Check if entity was added somewhere before, and check if still valid
        const oldKey = queryKey(entity.componentTypes)
        if (oldKey in this.queries && this.queries[oldKey].includes(entity)) {
            const query = this.queries[oldKey]
            const index = query.indexOf(entity)
            if (index > -1) query.splice(index, 1)
        }

        const c = new component(data)
        entity.components.push(c)
        entity.componentTypes.push(typeID)

        // TODO check if entity needs to be put into query
        const newKey = queryKey(entity.componentTypes)
        if (newKey in this.queries && !this.queries[newKey].includes(entity)) this.queries[newKey].push(entity)

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
export function hashCode(str: string) {
    let hash = 0;
    for (let i = 0, len = str.length; i < len; i++) {
        let chr = str.charCodeAt(i);
        hash = (hash << 5) - hash + chr;
        hash |= 0; // Convert to 32bit integer
    }
    return hash;
}