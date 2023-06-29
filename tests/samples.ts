import { Component } from "../src/ecs/Component";
import { System } from "../src/ecs/System";
import { operand } from "../src/ecs/utils";

export class RadiusComponent extends Component<{ real: number, draw: number }> { }

export class RotComponent extends Component<{ rot: number }> { }

export class RenderSystem extends System {
    static queries = [];
    execute(): void {
        // do something
    }
}

export class RadiusMultSystem extends System {
    static queries = [[operand("exist", RadiusComponent)]]
    execute(): void {
        // do something
    }
}

export class RotSystem extends System {
    static queries = [[operand("exist", RotComponent)]]
    execute(): void {
        // do something
    }
}

export class RotRadSystem extends System {
    static queries = [[operand("exist", RotComponent), operand("exist", RadiusComponent)]]
    execute(): void {
        // do something
    }
}

export class RotAndRadSystem extends System {
    static queries = [[operand("exist", RotComponent)], [operand("exist", RadiusComponent)]]
    execute(): void {
        // do something
    }
}