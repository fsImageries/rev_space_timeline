import { Component, ComponentConstructor, ComponentSchema } from "./Component";
import { Entity } from "./Entity";

type Query = { [systemID: string]: { componentIDs: string[]; entities: Entity[] } };

export class EntityComponentManager {
  public queries: Query;
  public entities: Entity[];

  constructor() {
    this.queries = {};
    this.entities = [];
  }

  /* eslint-disable @typescript-eslint/no-explicit-any*/
  public getQuery(id: string, components: ComponentConstructor<any, any>[]) {
    if (!(id in this.queries)) this.queries[id] = { componentIDs: components.map((c) => c.typeID), entities: [] };
    return this.queries[id].entities;
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
      const q = this.queries[id];
      const cIds = q.componentIDs;
      if (cIds.length != 0 && !q.entities.includes(entity) && cIds.every((i) => i in (entity as Entity).components)) {
        q.entities.push(entity);
      }
    }

    return this;
  }
}
