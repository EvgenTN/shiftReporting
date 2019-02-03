import { InputComponent, CheckboxComponent } from '../elements';


export class Element {
  componentKey: string;
  component: any;
  name?: string;
  key?: string;
  isRequired?: boolean;
  value?: any;
  settings: { key: string, componentKey: string, label: string, placeholder?: string, value?: any }[];

  gridsterItemOptions: {} = {};

  constructor() {
    this.name = '';
    this.isRequired = true;
    this.value = '';
    this.settings = [
      { key: 'name', componentKey: 'input', label: 'Name', placeholder: 'Enter name' },
      { key: 'isRequired', componentKey: 'checkbox', label: 'Required' }
    ];
  }

  getValue(propName: string): any {
    return this[propName];
  }

  setValue(props): void {
    console.log(props);
    for (const key in props) {
      if (props.hasOwnProperty(key)) {
        this[key] = props[key];
        console.log(key);
      }
    }
  }

  getGridsterItemOptions() {
    return this.gridsterItemOptions;
  }
}

