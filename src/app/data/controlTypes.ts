import { ControlType } from '../models';
import { LabelComponent, InputComponent, DropdownComponent, TextAreaComponent } from '../elements/elements';
import { ElementLabel, ElementInput, ElementDropdown } from '../elements/models';
import { ElementTextArea } from '../elements/models/elementTextArea';

export const controlTypes: ControlType[] = [
  { key: 'label', value: 'Label', component: LabelComponent, elementClass: ElementLabel },
  { key: 'input', value: 'Input', component: InputComponent, elementClass: ElementInput },
  { key: 'dropdown', value: 'Dropdown', component: DropdownComponent, elementClass: ElementDropdown },
  { key: 'textarea', value: 'Textarea', component: TextAreaComponent, elementClass: ElementTextArea }

  // { key: 'dropdown', value: 'Dropdown' },
  // { key: 'textarea', value: 'Text area' },
];
