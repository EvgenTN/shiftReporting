import { Element } from './element';
import { InputComponent, TextAreaComponent, DropdownComponent } from '../elements';

const types: Array<{ key: string, value: string }> = [
  { key: 'text', value: 'text' },
  { key: 'password', value: 'password' },
  { key: 'date', value: 'date' },
  { key: 'number', value: 'number' },
];

export class ElementInput extends Element {
  placeholder: string;
  type: string;
  private _settings = [
    { key: 'type', componentKey: 'dropdown', component: DropdownComponent, label: 'InputType', options: types },
    { key: 'placeholder', componentKey: 'input', component: InputComponent, label: 'Placeholder'}
  ];

  private _gridsterItemOptions = {
    rows: 1,
    maxItemCols: Infinity,
    maxItemRows: 1
  };

  constructor(key?: string) {
    super();
    this.componentKey = 'input';
    this.component = InputComponent;
    this.key = key ? key : 'input' + Date.now();
    this.placeholder = 'input';
    this.type = 'text';
    this.settings = Object.assign(this.settings, this._settings);
    Object.assign(this.gridsterItemOptions, this._gridsterItemOptions);
  }
}
