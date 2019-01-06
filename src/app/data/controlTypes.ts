import { ControlType } from '../models';
import { LabelComponent, InputComponent } from '../elements/elements';

export const controlTypes: ControlType[] = [
  { key: 'label', value: 'Label', component: LabelComponent },
  { key: 'input', value: 'Input', component: InputComponent },
  // { key: 'dropdown', value: 'Dropdown' },
  // { key: 'textarea', value: 'Text area' },
];
