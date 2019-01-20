import { InputComponent } from '../elements';

export class Element {
  component: any;
  name?: string;
  key?: string;
  isRequired?: boolean;
  settings: { key: string, component: any, label: string, value?: any, placeholder?: string }[];

  constructor() {
    this.name = '';
    this.isRequired = false;
    this.settings = [
      { key: 'name', component: InputComponent, label: 'Name', value: this.name, placeholder: 'Enter name' },
      { key: 'isRequired', component: InputComponent, label: 'isRequired', value: this.isRequired }
    ];
  }
}

