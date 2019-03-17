import { Element } from './element';
import { InputComponent, TextAreaComponent, DropdownComponent } from '../elements';

const types: Array<{ key: string, value: string }> = [
  { key: 'text', value: 'Text' },
  { key: 'password', value: 'Password' },
  { key: 'date', value: 'Date' },
  { key: 'number', value: 'Number' },
];

export class ElementInput extends Element {
  placeholder: string;
  type: string;
  private _settings = [
    { key: 'type', componentKey: 'dropdown', component: DropdownComponent, label: 'Input type', options: types },
    { key: 'placeholder', componentKey: 'input', component: InputComponent, label: 'Placeholder' },
    { key: 'isRequired', componentKey: 'checkbox', label: 'Required' }

  ];

  private _gridsterItemOptions = {
    rows: 1,
    maxItemCols: Infinity,
    maxItemRows: 1,
    resizeEnabled: true,
  };

  constructor(key?: string) {
    super();
    this.componentKey = 'input';
    this.component = InputComponent;
    this.key = key ? key : 'input' + Date.now();
    this.placeholder = 'Input';
    this.type = 'text';
    this.settings = Object.assign(this.settings, this._settings);
    Object.assign(this.gridsterItemOptions, this._gridsterItemOptions);
  }
}
