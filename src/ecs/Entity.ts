import { Component, ComponentConstructor, ComponentSchema } from "./Component";
import { EntityComponentManager } from "./EntityComponentManager";

export class Entity {
    constructor(
        public ecManager: EntityComponentManager,
        public id: string,
        public components: Component<any>[],
        public componentTypes: string[],
    ){}

    public addComponent<T extends ComponentSchema, C extends Component<T>>(component: ComponentConstructor<T,C>, data:T) {
        this.ecManager.addEntityComponent(this, component, data)
        return this
    }
}