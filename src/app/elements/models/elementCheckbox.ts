import { Element } from './element';
import { CheckboxComponent } from '../elements';

export class ElementCheckbox extends Element {

  constructor(value?: boolean) {
    super();
    this.componentKey = 'checkbox';
    this.component = CheckboxComponent;
    this.key = 'checkbox' + Date.now();
    this.value = value ? value : false;
  }
}
