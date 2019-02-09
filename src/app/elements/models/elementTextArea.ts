import { Element } from './element';
import { TextAreaComponent, InputComponent } from '../elements';

export class ElementTextArea extends Element {
    placeholder: string;
    private _settings = [
        { key: 'placeholder', componentKey: 'input', component: InputComponent, label: 'placeholder'}
    ];

    private _gridsterItemOptions = {
        maxItemRows: Infinity,
        maxItemCols: Infinity,
    };

    constructor(key?: string) {
        super();
        this.componentKey = 'textarea';
        this.component = TextAreaComponent;
        this.key = key ? key : 'textarea' + Date.now();
        this.placeholder = 'textarea';
        this.settings = this.settings.concat(this._settings);
        Object.assign(this.gridsterItemOptions, this._gridsterItemOptions);
    }
}
