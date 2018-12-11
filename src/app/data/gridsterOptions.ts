import { GridsterConfig } from 'angular-gridster2';

export const options: GridsterConfig = {
  gridType: 'fixed',
  keepFixedHeightInMobile: true,
  minRows: 10,
  fixedColWidth: 30,
  fixedRowHeight: 30,
  margin: 0,
  outerMarginTop: 15,
  outerMarginBottom: 15,
  outerMarginLeft: 15,
  outerMarginRight: 15,
  enableEmptyCellDrop: true,
  displayGrid: 'always',
  // enableEmptyCellClick: true,
  // emptyCellClickCallback: this.emptyCellClick.bind(this),
  pushItems: true,
  swap: true,
  resizable: {
    enabled: true,
  },
  draggable: {
    delayStart: 0,
    enabled: true,
    ignoreContentClass: 'gridster-item-content',
    // ignoreContent: true,
    dragHandleClass: 'drag-handler',
    // stop: DragComponent.eventStop,
    // start: DragComponent.eventStart,
    dropOverItems: false,
    // dropOverItemsCallback: DragComponent.overlapEvent,
  },
};
