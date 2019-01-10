import { Element } from './element';
import { InputComponent } from '../elements';

export class ElementInput extends Element {
  type: string;
  placeholder: string;
  settings = {
    name: 'textbox',
    type: 'dropdown',
    placeholder: 'textbox',
  };



  constructor() {
    super();
    this.component = InputComponent;
    this.key = 'input' + Date.now();
    this.placeholder = 'Textbox';
    this.type = 'text';
    }
}
