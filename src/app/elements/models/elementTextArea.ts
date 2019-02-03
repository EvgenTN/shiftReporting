import { Element } from './element';
import { TextAreaComponent, InputComponent } from '../elements';

export class ElementTextArea extends Element {
    placeholder: string;
    private _settings = [
        { key: 'placeholder', componentKey: 'input', component: InputComponent, label: 'placeholder'}
    ];

    constructor() {
        super();
        this.componentKey = 'textarea';
        this.component = TextAreaComponent;
        this.key = 'textarea' + Date.now();
        this.placeholder = 'textarea';
        this.settings = this.settings.concat(this._settings);
    }
}
