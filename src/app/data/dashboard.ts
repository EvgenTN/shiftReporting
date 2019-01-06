import { LabelComponent } from '../elements/elements';
import { FormElement } from '../models';

export const dashboard: FormElement[] = [
  {
    gridster: {
      x: 1,
      y: 1,
      cols: 3,
      rows: 1,
    },
    element: {
      component: LabelComponent,
      key: 'input1',
      value: 'Input1',
      name: 'input1',
      options: []
    },
  },
  {
    gridster: {
      x: 1,
      y: 2,
      cols: 3,
      rows: 1,
    },
    element: {
      component: LabelComponent,
      key: 'input1',
      value: 'Input23',
      name: 'input1',
      options: []
    },
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
