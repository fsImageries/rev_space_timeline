import { Component } from "../src/ecs/Component";
import { System } from "../src/ecs/System";

export class RadiusComponent extends Component<{ real: number, draw: number }> { }

export class RadiusMultSystem extends System {
    static queries = [RadiusComponent]
    execute(): void {}
}