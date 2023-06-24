export type ComponentSchema = {
    [propName: string]: any;
};

export abstract class Component<T extends ComponentSchema> {
    static typeID: string;
    static isTag: boolean = true

    public instanceID: string;

    constructor(public data: T) {
        this.instanceID = crypto.randomUUID();
    }
}

export class TagComponent<T extends ComponentSchema> extends Component<T> {
    static isTag = false
}

export interface ComponentConstructor<T extends ComponentSchema, C extends Component<T>> {
    typeID: string
    isTag: boolean;
    new(data: T): C;
}