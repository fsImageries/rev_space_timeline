import { ComponentSchema, QueryElements, QueryOperand } from "./types";

export abstract class Component<T extends ComponentSchema> {
  static dependencies: QueryOperand[] = [];
  static typeID: string;
  static isTag = true;

  public instanceID: string;
  public dependendQueries?: QueryElements;

  constructor(public data: T) {
    this.instanceID = crypto.randomUUID();
  }

  public get that() {
    return this.constructor as typeof Component;
  }
}

export class TagComponent<T extends ComponentSchema> extends Component<T> {
  static isTag = false;
}

export type TypeSchema = { type: string };
export class TypeComponent extends Component<object> {
  static isTag = false;
}
