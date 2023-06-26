import { Entity } from "./Entity";

/* eslint-disable @typescript-eslint/no-explicit-any*/
export type ComponentSchema = {
  [propName: string]: any;
};

export abstract class Component<T extends ComponentSchema> {
  static dependencies: ComponentConstructor<any, any>[] = []
  static typeID: string;
  static isTag = true;

  public instanceID: string;
  public dependendEntities?: Entity[]

  constructor(public data: T) {
    this.instanceID = crypto.randomUUID();
  }
}

export class TagComponent<T extends ComponentSchema> extends Component<T> {
  static isTag = false;
}

export interface ComponentConstructor<T extends ComponentSchema, C extends Component<T>> {
  dependencies: ComponentConstructor<any, any>[];
  typeID: string;
  isTag: boolean;
  new (data: T): C;
}
