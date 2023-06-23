import { Component } from "../src/ecs/Component";
import { System } from "../src/ecs/System";

export class RadiusComponent extends Component<{ real: Number, draw: Number }> { }

export class RadiusMultSystem extends System {
    static queries = [RadiusComponent]
    execute(): void {}
}