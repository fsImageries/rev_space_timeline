import { Component } from "./Component";
import { EntityComponentManager } from "./EntityComponentManager";
import { ComponentConstructor, ComponentMap, ComponentSchema } from "./types";

export class Entity {
  constructor(public ecManager: EntityComponentManager, public id: string, public components: ComponentMap) {}

  public addComponent<T extends ComponentSchema, C extends Component<T>>(
    component: ComponentConstructor<T, C>,
    data?: T
  ) {
    this.ecManager.addEntityComponent(this, component, data);
    return this;
  }

  public getComponent<T extends ComponentSchema, C extends Component<T>>(
    component: ComponentConstructor<T, C>
  ): Component<T> {
    return this.components[component.typeID];
  }

  public init() {
    Object.values(this.components).forEach((c) => {
      if ("init" in c) {
        /* eslint-disable @typescript-eslint/no-explicit-any*/
        (c as any).init(this.ecManager.world);
      }
    });
  }
}
