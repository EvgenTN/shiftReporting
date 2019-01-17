import { Element } from './element';
import { LabelComponent, InputComponent } from '../elements';

export class ElementLabel extends Element {
  label: string;
  private _settings = [
    { key: 'label', component: InputComponent, label: 'Label', value: this.label },
  ];

  constructor(label?: string) {
    super();
    this.label = label || 'Label';
    this.component = LabelComponent;
    this.key = 'label' + Date.now();
    this._settings = [
      { key: 'label', component: InputComponent, label: 'Label', value: this.label },
    ];
    this.settings = this.settings.concat(this._settings);
  }
}
