import { GridsterItem } from 'angular-gridster2';
import { LabelComponent } from '../elements/elements';

export const dashboard: GridsterItem[] = [
  {
    x: 1,
    y: 0,
    cols: 9,
    rows: 1,
    key: 'input1',
    label: 'Input 1',
    controlType: LabelComponent
  },
  {
    x: 1,
    y: 1,
    cols: 9,
    rows: 1,
    key: 'input2',
    label: 'Input 1',
    options: [
      '1',
      '2',
      '3',
    ],
    controlType: 'dropdown'
  },
  {
    x: 1,
    y: 2,
    cols: 9,
    rows: 2,
    key: 'input3',
    label: 'Input 1',
    controlType: 'textarea',
  },
];
