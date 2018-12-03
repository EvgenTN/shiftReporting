import { FormElementBase } from './formElementBase';

export class FormElementTextbox extends FormElementBase<string> {
  controlType = 'textbox';
  type: string;

  constructor(options: {} = {}) {
    super(options);
    this.type = options['type'] || '';
  }
}
