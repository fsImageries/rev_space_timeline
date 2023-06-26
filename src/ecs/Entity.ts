import { Component, ComponentConstructor, ComponentSchema } from "./Component";
import { EntityComponentManager } from "./EntityComponentManager";

/* eslint-disable @typescript-eslint/no-explicit-any*/
type ComponentMap = { [propName: string]: Component<any> };

export class Entity {
  constructor(
    public ecManager: EntityComponentManager,
    public id: string,
    public components: ComponentMap
  ) { }

  public addComponent<T extends ComponentSchema, C extends Component<T>>(
    component: ComponentConstructor<T, C>,
    data: T
  ) {
    this.ecManager.addEntityComponent(this, component, data);
    return this;
  }

  public getComponent<T extends ComponentSchema, C extends Component<T>>(component: ComponentConstructor<T, C>) {
    return this.components[component.typeID];
  }

  public init() {
    Object.values(this.components).forEach(c => {
      if ("init" in c) {
        (c as any).init()
      }
    })
    
  }

  public queryComponentDependencies() {
    for (const comp of Object.values(this.components)) {
      const deps = (comp.constructor as typeof Component).dependencies
      if (deps.length === 0) continue
      const ents = []
      for (const ent of this.ecManager.entities) {
        if (ent === this) continue
        if (deps.some(d => d.typeID in ent.components)) ents.push(ent)
      }
      if (ents.length !== 0) comp.dependendEntities = ents
    }
  }
}