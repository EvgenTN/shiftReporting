import { ControlType } from '../models';
import { LabelComponent, InputComponent } from '../elements/elements';
import { ElementLabel, ElementInput } from '../elements/models';

export const controlTypes: ControlType[] = [
  { key: 'label', value: 'Label', component: LabelComponent, elementClass: ElementLabel },
  { key: 'input', value: 'Input', component: InputComponent, elementClass: ElementInput },
  // { key: 'dropdown', value: 'Dropdown' },
  // { key: 'textarea', value: 'Text area' },
];
