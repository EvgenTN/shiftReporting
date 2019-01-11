
export class Element {
  component: any;
  name?: string;
  key?: string;
  settings: {
    name: string,
    isRequired: boolean;
  } = {
      name: 'textbox',
      isRequired: false,
    };

  constructor() { }
}

