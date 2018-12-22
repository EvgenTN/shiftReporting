import { GridsterConfig } from 'angular-gridster2';

export const options: GridsterConfig = {
  gridType: 'fixed',
  keepFixedHeightInMobile: true,
  minRows: 10,
  fixedColWidth: 30,
  fixedRowHeight: 30,
  margin: 0,
  mobileBreakpoint: 100,
  // outerMarginTop: 15,
  // outerMarginBottom: 15,
  // outerMarginLeft: 15,
  // outerMarginRight: 15,
  enableEmptyCellDrop: true,
  // enableEmptyCellClick: true,
  // emptyCellClickCallback: this.emptyCellClick.bind(this),
  pushItems: true,
  swap: true,

};
