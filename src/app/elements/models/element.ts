import { InputComponent, CheckboxComponent } from '../elements';


export class Element {
  componentKey: string;
  component?: any;
  name?: string;
  key?: string;
  isRequired?: boolean;
  value: any;
  settings: { key: string, componentKey: string, label: string, placeholder?: string, value?: any, options?: any[] }[];

  gridsterItemOptions: {} = {};

  constructor() {
    this.name = '';
    this.isRequired = true;
    this.value = '';
    this.settings = [
      { key: 'name', componentKey: 'input', label: 'Name', placeholder: 'Enter name' },
    ];
  }

  getValue(propName: string): any {
    return this[propName];
  }

  setValue(props): void {
    for (const key in props) {
      if (props.hasOwnProperty(key)) {
        this[key] = props[key];
      }
    }
  }

  getGridsterItemOptions() {
    return this.gridsterItemOptions;
  }
}

