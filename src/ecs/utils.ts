import { ComponentQueryState, QueryOperand, TComponent } from "./types";
import { Entity } from "./Entity";

export const operand = (o: string, c: TComponent): QueryOperand => {
    return { operand: o, value: c };
};

export function validateState(entity: Entity, state: ComponentQueryState[], compID?: string) {
    const ids = Object.keys(entity.components);
    const names: string[] = [];
    const instanceIds = Object.values(entity.components).map((c) => {
        if (c.constructor.name === "BaseDataComponent") names.push(c.data.name);
        return c.instanceID;
    });
    return state.every((query) => {
        const [id, shouldExist, shouldSelf, name] = query;
        // check if component should exist
        if (!shouldExist && ids.includes(id)) return false;

        // Check if component should only be on same entity
        if (shouldSelf) {
            // check against compID
            return compID ? instanceIds.includes(compID) : false;
        }

        if (name !== null) return names.includes(name);

        // check that component exists
        if (!ids.includes(id)) return false;

        return true;
    });
}