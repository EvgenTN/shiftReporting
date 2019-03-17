import { Element } from './element';
import { DropdownComponent, InputComponent, TextAreaComponent } from '../elements';

export class ElementDropdown extends Element {


  private _settings = [
    { key: 'placeholder', componentKey: 'input', component: InputComponent, label: 'Placeholder' },
    { key: 'options', componentKey: 'textarea', component: TextAreaComponent, label: 'Options' },
    { key: 'isRequired', componentKey: 'checkbox', label: 'Required' }

  ];

  private _gridsterItemOptions = {
    rows: 1,
    maxItemCols: Infinity,
    maxItemRows: 1,
    resizeEnabled: true,
  };

  value: { key: string, value: string };
  options: Array<{ key: string, value: string }>;
  placeholder: string;

  constructor(key?: string) {
    super();
    this.options = [];
    this.componentKey = 'dropdown';
    this.component = DropdownComponent;
    this.key = key ? key : 'dropdown' + Date.now();
    this.settings = this.settings.concat(this._settings);
    this.placeholder = '';
    Object.assign(this.gridsterItemOptions, this._gridsterItemOptions);
  }

  getOptionsAsString(): string {
    return this.options.map(option => option.value).join('\n');
  }

  getValue(propName: string): any {
    if (propName === 'options') {
      return this.getOptionsAsString();
    }
    return this[propName];
  }

  setValue(props): void {
    for (const key in props) {
      if (props.hasOwnProperty(key)) {
        if (key === 'options') {
          this[key] = this.setOptionsFromString(props[key]);
        } else { this[key] = props[key]; }
      }
    }
  }

  setOptionsFromString(str: string) {
    let result = str.split('\n').map(item => {
      const value: string = item.trim();
      let key: string;
      if (value) {
        key = value[0].toLowerCase() + value.slice(1);
        key = key.replace(/\s/g, '');
      }
      return {
        key,
        value,
      };
    });
    result = result.filter(item => !!item.key);
    return result;
  }
}
