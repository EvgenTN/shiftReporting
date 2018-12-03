export class FormElementBase<T> {
  cols: number;
  rows: number;
  x: number;
  y: number;
  value: T;
  key: string;
  label: string;
  required: boolean;
  order: number;
  controlType: string;


  constructor(options: {
    cols?: number,
    rows?: number,
    x?: number,
    y?: number,
    value?: T,
    key?: string,
    label?: string,
    required?: boolean,
    order?: number,
    controlType?: string

  } = {}) {
    this.value = options.value;
    this.key = options.key || '';
    this.label = options.label || '';
    this.required = !!options.required;
    this.order = options.order === undefined ? 1 : options.order;
    this.controlType = options.controlType || '';
  }
}
