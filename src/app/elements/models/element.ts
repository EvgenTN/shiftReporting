import { InputComponent } from '../elements';

export class Element {
  component: any;
  name?: string;
  key?: string;
  isRequired?: boolean;
  settings: { key: string, component: any, label: string, placeholder?: string, value?: string }[];

  constructor() {
    this.name = '';
    this.isRequired = false;
    this.settings = [
      { key: 'name', component: InputComponent, label: 'Name', placeholder: 'Enter name' },
      { key: 'isRequired', component: InputComponent, label: 'isRequired' }
    ];
  }
}

