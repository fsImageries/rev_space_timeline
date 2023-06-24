import { Component } from "../src/ecs/Component";
import { System } from "../src/ecs/System";

export class RadiusComponent extends Component<{ real: number, draw: number }> { }

export class RotComponent extends Component<{ rot: number }> { }

export class RadiusMultSystem extends System {
    static queries = [RadiusComponent]
    execute(): void {}
}

export class Rot5System extends System {
    static queries = [RotComponent]
    execute(): void {}
}