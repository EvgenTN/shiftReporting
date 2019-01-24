import { Element } from './element';
import { TextAreaComponent, InputComponent } from '../elements';

export class ElementTextArea extends Element {
    placeholder: string;
    private _settings = [
        { key: 'placeholder', component: InputComponent, label: 'placeholder'}
    ];

    constructor() {
        super();
        this.component = TextAreaComponent;
        this.key = 'textArea' + Date.now();
        this.placeholder = 'textarea';
        this.settings = this.settings.concat(this._settings);
    }
}
