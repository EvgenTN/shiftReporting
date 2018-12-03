import { Component, OnInit } from '@angular/core';
import { GridsterConfig, GridsterItem } from 'angular-gridster2';
import { FormElementBase } from 'src/app/formElementBase';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.scss']
})
export class FormBuilderComponent implements OnInit {
  constructor() { }

  currentFormElement: GridsterItem = null;

  options: GridsterConfig = {
    gridType: 'fixed',
    // minCols: 18,
    // maxCols: 18,
    // minRows: 18,
    // maxRows: 18,
    fixedColWidth: 30,
    fixedRowHeight: 30,
    margin: 2,
    outerMarginTop: 15,
    outerMarginBottom: 15,
    outerMarginLeft: 15,
    outerMarginRight: 15,
    enableEmptyCellDrop: true,
    // displayGrid: 'always',
    // enableEmptyCellClick: true,
    // emptyCellClickCallback: this.emptyCellClick.bind(this),
    emptyCellDropCallback: this.emptyCellClick.bind(this),
    draggable: {
      delayStart: 0,
      enabled: true,
      ignoreContentClass: 'gridster-item-content',
      ignoreContent: false,
      dragHandleClass: 'drag-handler',
      // stop: DragComponent.eventStop,
      // start: DragComponent.eventStart,
      dropOverItems: false,
      // dropOverItemsCallback: DragComponent.overlapEvent,
    },
  };

  dashboard: GridsterItem[] = [
    {
      x: 1,
      y: 0,
      cols: 9,
      rows: 1,
      key: 'input1',
      controlType: 'textbox'
    },
    {
      x: 1,
      y: 1,
      cols: 9,
      rows: 1,
      key: 'input2',
      controlType: 'textbox'
    },
    {
      x: 1,
      y: 2,
      cols: 9,
      rows: 1,
      key: 'input3',
      controlType: 'dropdown'
    },
  ];


  ngOnInit() {
    // console.log(this.dashboard);
  }

  setCurrentFormElement(item): void {
    if (this.currentFormElement !== item) {
      this.currentFormElement = item;
      // console.log(item);

    } else {
      this.currentFormElement = null;
    }
  }

  emptyCellClick(event: MouseEvent, item: GridsterItem) {
    item.cols = 9;
    item.x = 1;
    item.key = 'input';
    item.controlType = 'range';
    // console.log('empty cell click', event, item);
    this.dashboard.push(item);
  }

}
