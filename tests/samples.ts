import { Component } from "../src/ecs/Component";
import { System, SystemQueries } from "../src/ecs/System";

export class RadiusComponent extends Component<{ real: number, draw: number }> { }

export class RotComponent extends Component<{ rot: number }> { }

export class RadiusMultSystem extends System {
    static queries = [RadiusComponent]
    execute(): void {}
}

export class RotSystem extends System {
    static queries = [RotComponent]
    execute(): void {}
}

export class RotRadSystem extends System {
    static queries = [RotComponent, RadiusComponent]
    execute(): void {}
}