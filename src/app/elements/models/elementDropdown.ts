import { Element } from './element';
import { DropdownComponent, InputComponent, TextAreaComponent } from '../elements';

export class ElementDropdown extends Element {


  private _settings = [
    { key: 'options', componentKey: 'textarea', component: TextAreaComponent, label: 'Options' },

  ];

  private _gridsterItemOptions = {
    rows: 1,
    maxItemCols: Infinity,
    maxItemRows: 1,
    resizeEnabled: true,
  };

  value: { key: string, value: string };
  options: Array<{ key: string, value: string }>;

  constructor(key?: string) {
    super();
    this.options = [
      { key: 'test1', value: 'test 1' },
      { key: 'test2', value: 'test 2' },
      { key: 'test3', value: 'test 3' }];
    this.componentKey = 'dropdown';
    this.component = DropdownComponent;
    this.key = key ? key : 'dropdown' + Date.now();
    this.settings = this.settings.concat(this._settings);
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
