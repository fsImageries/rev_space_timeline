import { BaseDataComponent, RenderComponent } from "../templates/__init__";
import { Component } from "./Component";
import { Entity } from "./Entity";
import { World } from "./World";
import { ComponentConstructor, ComponentSchema } from "./types";

export class EntityComponentManager {
  // public queries: Query;
  public entities: Entity[];
  public world: World;

  constructor(world: World) {
    // this.queries = {};
    this.entities = [];
    this.world = world;
  }

  public unmount() {
    for (const entity of this.entities) {
      const rcomp = entity.getComponent(RenderComponent);
      if (!rcomp) continue;
      document.body.removeChild(rcomp.data.renderer3d.domElement);
      document.body.removeChild(rcomp.data.renderer2d.domElement);
    }
  }

  public mount() {
    for (const entity of this.entities) {
      const rcomp = entity.getComponent(RenderComponent);
      if (!rcomp) continue;
      document.body.appendChild(rcomp.data.renderer3d.domElement);
      document.body.appendChild(rcomp.data.renderer2d.domElement);
    }
  }

  public getEntityByBaseName(name: string) {
    // return this.entities.find((e) => e.getComponent(BaseDataComponent)?.data.name === name);
    for (let index = 0; index < this.entities.length; index++) {
      const entity = this.entities[index];
      const comp = entity.getComponent(BaseDataComponent)
      if (comp) {
        if (comp.data.name && comp.data.name === name) return entity
      }
    }
  }

  public createEntity() {
    const entity = new Entity(this, crypto.randomUUID(), {});
    this.entities.push(entity);
    return entity;
  }

  public addEntityComponent<T extends ComponentSchema, C extends Component<T>>(
    entity: Entity | string,
    component: ComponentConstructor<T, C>,
    data?: T
  ) {
    if (!component.typeID) component.typeID = crypto.randomUUID();
    const typeID = component.typeID;

    entity = typeof entity === "string" ? (this.entities.find((e) => e.id === entity) as Entity) : entity;
    if (typeID in entity.components) return this; // Component already exists

    const c = new component(data ? data : ({} as T));
    entity.components[typeID] = c;

    c.dependendQueries = this.world.queryManager.getComponentQuery(c);

    this.world.queryManager.updateQueries(entity);
    return this;
  }

  // public queryComponentDependencies() {
  //   this.entities.forEach(e => e.queryComponentDependencies())
  // }

  public init() {
    this.entities.forEach((e) => e.init());
  }
}
