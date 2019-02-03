import { Element } from './element';
import { LabelComponent, InputComponent } from '../elements';

export class ElementLabel extends Element {
  label: string;
  private _settings = [
    { key: 'label', componentKey: 'input', component: InputComponent, label: 'Label' },
  ];

  private _gridsterItemOptions = {
    maxItemRows: 1,
    maxItemCols: undefined,
    resizeEnabled: true,
  };

  constructor(label?: string) {
    super();
    this.label = label || 'Label';
    this.componentKey = 'label';
    this.component = LabelComponent;
    this.key = 'label' + Date.now();
    this.settings = this.settings.concat(this._settings);
    Object.assign(this.gridsterItemOptions, this._gridsterItemOptions);

  }

}
