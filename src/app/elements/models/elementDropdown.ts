import { Element } from './element';
import { DropdownComponent } from '../elements';

export class ElementDropdown extends Element {
  options: { key: string, value: string }[];
  private _settings = {
    options: 'textarea',
  };
  constructor() {
    super();
    this.options = [
      {key: 'test1', value: 'test 1'},
      {key: 'test2', value: 'test 2'},
      {key: 'test3', value: 'test 3'}];
    this.componentKey = 'dropdown';
    this.component = DropdownComponent;
    this.key = 'dropdown' + Date.now();
    this.settings = Object.assign(this.settings, this._settings);

  }
}
