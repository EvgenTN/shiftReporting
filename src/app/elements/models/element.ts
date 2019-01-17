import { InputComponent } from '../elements';

export class Element {
  component: any;
  name?: string;
  key?: string;
  settings: { key: string, component: any, label: string, value?: any }[]
    = [
      { key: 'name', component: InputComponent, label: 'Name', value: this.name },
      { key: 'isRequired', component: InputComponent, label: 'isRequired', value: false }
    ];

  constructor() { }
}

