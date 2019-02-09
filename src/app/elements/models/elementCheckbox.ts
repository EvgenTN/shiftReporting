import { Element } from './element';
import { CheckboxComponent } from '../elements';
import { GridsterItem, GridsterItemComponent } from 'angular-gridster2';

export class ElementCheckbox extends Element {

  private _gridsterItemOptions = {
    rows: 1,
    cols: 1,
    maxItemCols: 1,
    maxItemRows: 1,
  };

  constructor(value?: boolean, key?: string) {
    super();
    this.componentKey = 'checkbox';
    this.component = CheckboxComponent;
    this.key = key ? key : 'checkbox' + Date.now();
    this.value = value ? value : false;
    Object.assign(this.gridsterItemOptions, this._gridsterItemOptions);
  }
}
