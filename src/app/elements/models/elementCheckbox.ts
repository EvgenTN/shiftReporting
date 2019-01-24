import { Element } from './element';
import { CheckboxComponent } from '../elements';

export class ElementCheckbox extends Element {
  isChecked: boolean;

  constructor () {
    super();
    this.component = CheckboxComponent;
    this.key = 'checkbox' + Date.now();
  }
}
