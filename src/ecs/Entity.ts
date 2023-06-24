import { Component, ComponentConstructor, ComponentSchema } from "./Component";
import { EntityComponentManager } from "./EntityComponentManager";

type ComponentMap = { [propName: string] : Component<any>} 

/* eslint-disable @typescript-eslint/no-explicit-any*/
export class Entity {
    constructor(
        public ecManager: EntityComponentManager,
        public id: string,
        public components: ComponentMap,
    ){}

    public addComponent<T extends ComponentSchema, C extends Component<T>>(component: ComponentConstructor<T,C>, data:T) {
        this.ecManager.addEntityComponent(this, component, data)
        return this
    }
}