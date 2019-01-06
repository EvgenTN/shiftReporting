import { GridsterConfig } from 'angular-gridster2';

export const options: GridsterConfig = {
  gridType: 'fixed',
  keepFixedHeightInMobile: true,
  minRows: 10,
  fixedColWidth: 50,
  fixedRowHeight: 50,
  margin: 0,
  mobileBreakpoint: 100,
  pushItems: false,
  // outerMarginTop: 15,
  // outerMarginBottom: 15,
  // outerMarginLeft: 15,
  // outerMarginRight: 15,
  enableEmptyCellDrop: true,
  // enableEmptyCellClick: true,
  // emptyCellClickCallback: this.emptyCellClick.bind(this),
  swap: false,

};
