import { InputComponent } from '../elements';

export class Element {
  component: any;
  name?: string;
  key?: string;
  settings: { key: string, component: any, label: string }[]
    = [
      { key: 'name', component: InputComponent, label: 'Name' },
      { key: 'isRequired', component: InputComponent, label: 'isRequired' }
    ];

  constructor() { }
}

