import { Element } from './element';
import { InputComponent } from '../elements';

export class ElementInput extends Element {
  type: string;
  placeholder: string;
  private _settings = {
    type: 'dropdown',
    placeholder: 'textbox',
  };

  constructor() {
    super();
    this.componentKey = 'input';
    this.component = InputComponent;
    this.key = 'input' + Date.now();
    this.placeholder = 'Textbox';
    this.type = 'text';
    this.settings = Object.assign(this.settings, this._settings);
  }
}
