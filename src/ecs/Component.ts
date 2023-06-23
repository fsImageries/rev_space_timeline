export type ComponentSchema = {
    [propName: string]: any;
};

export abstract class Component<T extends ComponentSchema> {
    static typeID: number
    static isTag: boolean = true

    constructor(public data: T) {}
}

export class TagComponent<T extends ComponentSchema> extends Component<T> {
    static isTag = false
}

export interface ComponentConstructor<T extends ComponentSchema, C extends Component<T>> {
    isTag: boolean;
    new(data: T): C;
}

// class Some extends Component {}
// Some.isTag = false
// Some.schema = {x: 1}

// const s:ComponentConstructor<Some> = Some
// const s2 = new s({schema: {}, isTag:false})

// console.log(s.schema, s.isTag)