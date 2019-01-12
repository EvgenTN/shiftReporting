import { LabelComponent, InputComponent } from '../elements/elements';
import { ElementLabel } from '../elements/models/elementLabel';
import { ElementInput } from '../elements/models/elementInput';
import { ElementDropdown } from '../elements/models';

export const dashboard: any[] = [
  {
    gridster: {
      x: 1,
      y: 1,
      cols: 3,
      rows: 1,
    },
    element: {
      component: LabelComponent,
      key: 'label1',
      label: 'Label 1',
      name: 'label1',
      // options: []
      settings:
      {
        label: 'textbox',
        name: 'textbox'
      }
    },
  },
  {
    gridster: {
      x: 1,
      y: 2,
      cols: 4,
      rows: 1,
    },
    element: new ElementDropdown()
  },
  {
    gridster: {
      x: 1,
      y: 3,
      cols: 4,
      rows: 1,
    },
    element: new ElementInput()
  },

  // {
  //   x: 1,
  //   y: 1,
  //   cols: 9,
  //   rows: 1,
  //   key: 'input2',
  //   label: 'Input 1',
  //   options: [
  //     '1',
  //     '2',
  //     '3',
  //   ],
  //   controlType: 'dropdown'
  // },
  // {
  //   x: 1,
  //   y: 2,
  //   cols: 9,
  //   rows: 2,
  //   key: 'input3',
  //   label: 'Input 1',
  //   controlType: 'textarea',
  // },
];
