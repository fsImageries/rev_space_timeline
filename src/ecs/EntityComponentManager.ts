import { Component, ComponentConstructor, ComponentSchema } from "./Component";
import { Entity } from "./Entity";
import { SystemQueries } from "./System";

// type Query = { [systemID: string]: { componentIDs: string[]; entities: Entity[] } };
export type QueryElements = { componentIDs: string[]; entities: Entity[] }[] ;
export type Query = { [systemID: string]: QueryElements };

export class EntityComponentManager {
  public queries: Query;
  public entities: Entity[];

  constructor() {
    this.queries = {};
    this.entities = [];
  }

  /* eslint-disable @typescript-eslint/no-explicit-any*/
  public getQuery(id: string, components: SystemQueries) {
    if (!(id in this.queries)) {
      this.queries[id] = components.map(comp => {
        return {
          componentIDs: comp.map((c) => c.typeID),
          entities: []
        }
      })
    }
    // pass the entity list to the querying component and fill it everytime a component is added
    return this.queries[id];
  }

  public createEntity() {
    const entity = new Entity(this, crypto.randomUUID(), {});
    this.entities.push(entity);
    return entity;
  }

  public addEntityComponent<T extends ComponentSchema, C extends Component<T>>(
    entity: Entity | string,
    component: ComponentConstructor<T, C>,
    data: T
  ) {
    if (!component.typeID) component.typeID = crypto.randomUUID();
    const typeID = component.typeID;

    entity = typeof entity === "string" ? (this.entities.find((e) => e.id === entity) as Entity) : entity;
    if (typeID in entity.components) return this; // Component already exists

    const c = new component(data);
    entity.components[typeID] = c;

    // check if entity needs to be put into query
    for (const id in this.queries) {
      const query = this.queries[id];
      for (const q of query) {
        const cIds = q.componentIDs;
        if (cIds.length != 0 && !q.entities.includes(entity) && cIds.every((i) => i in (entity as Entity).components)) {
          q.entities.push(entity);
        }
      }
    }

    return this;
  }
}
