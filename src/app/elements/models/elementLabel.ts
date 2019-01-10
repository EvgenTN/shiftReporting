import { Element } from './element';
import { LabelComponent } from '../elements';

export class ElementLabel extends Element {
  label: string;
  settings = {
    name: 'textbox',
    label: 'textbox'
  };

  constructor(label?: string) {
    super();
    this.label = label || 'Label';
    this.component = LabelComponent;
    this.key = 'label' + Date.now();
  }
}
