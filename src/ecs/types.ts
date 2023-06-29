import { Component } from "./Component";
import { Entity } from "./Entity";

export type QueryElements = { entityQuery: ComponentQueryState[]; entities: Entity[] }[];
export type Query = { [systemID: string]: QueryElements };
export type ComponentQueryState = [string, boolean, boolean, string | null];

export interface QueryOperand {
    operand: string;
    value: TComponent;
    /* eslint-disable @typescript-eslint/no-explicit-any*/
    extra?: any;
}

/* eslint-disable @typescript-eslint/no-explicit-any*/
export type TComponent = ComponentConstructor<any, any>;
/* eslint-disable @typescript-eslint/no-explicit-any*/
export type IComponent = Component<any>;

/* eslint-disable @typescript-eslint/no-explicit-any*/
export type ComponentSchema = {
    [propName: string]: any;
};

export interface ComponentConstructor<T extends ComponentSchema, C extends Component<T>> {
    dependencies: QueryOperand[];
    typeID: string;
    isTag: boolean;
    new(data: T): C;
}

/* eslint-disable @typescript-eslint/no-explicit-any*/
export type ComponentMap = { [propName: string]: Component<any> };