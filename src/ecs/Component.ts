import { QueryElements, QueryOperand } from "./QueryManager";

/* eslint-disable @typescript-eslint/no-explicit-any*/
export type TComponent = ComponentConstructor<any, any>;

/* eslint-disable @typescript-eslint/no-explicit-any*/
export type ComponentSchema = {
  [propName: string]: any;
};

export abstract class Component<T extends ComponentSchema> {
  static dependencies: QueryOperand[] = []
  static typeID: string;
  static isTag = true;

  public instanceID: string;
  public dependendEntities?: QueryElements

  constructor(public data: T) {
    this.instanceID = crypto.randomUUID();
  }
}

export class TagComponent<T extends ComponentSchema> extends Component<T> {
  static isTag = false;
}

export interface ComponentConstructor<T extends ComponentSchema, C extends Component<T>> {
  dependencies: QueryOperand[];
  typeID: string;
  isTag: boolean;
  new (data: T): C;
}
