import { Component, OnInit } from '@angular/core';
import { GridsterConfig, GridsterItem } from 'angular-gridster2';
import { FormElementBase } from 'src/app/formElementBase';
import { FormElementTextbox } from 'src/app/formElementTextbox';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.scss']
})
export class FormBuilderComponent implements OnInit {
  constructor() { }

  currentElement: GridsterItem = null;
  currentElementId: number;
  dragNewElement = new FormElementTextbox({
    label: 'New'
  });

  options: GridsterConfig = {
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
    emptyCellDropCallback: this.emptyCellClick.bind(this),
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
  // dashboard: GridsterItem[] = [];

  dashboard: GridsterItem[] = [
    {
      x: 1,
      y: 0,
      cols: 9,
      rows: 1,
      key: 'input1',
      label: 'Input 1',
      controlType: 'textbox'
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


  ngOnInit() {
  }

  setCurrentElement(item): void {
    if (this.currentElement !== item) {
      this.currentElement = item;
      this.currentElementId = this.getElementId(item);
    } else {
      this.currentElement = null;
    }
  }

  getElementId(element): number {
    return this.dashboard.findIndex(item => item === element);
  }


  setElement(element): void {
    // console.log(element);
    const idElement = this.dashboard.findIndex(item => item === this.currentElement);
    Object.assign(this.dashboard[idElement], element);
    if (element.controlType !== 'dropdown') {
      delete this.dashboard[idElement].options;
    } else if (!element.options) {
      this.dashboard[idElement].options = [];
    }
    this.changedOptions();
  }

  deleteElement($event): void {
    this.dashboard.splice(this.currentElementId, 1);
    this.currentElement = null;
    this.currentElementId = null;
  }



  emptyCellClick(event: MouseEvent, item: GridsterItem) {
    console.log(event);
    item.cols = 9;
    item.key = 'input-' + Date.now();
    item.controlType = 'textbox';
    item.resizeEnabled = false;
    this.dashboard.push(item);
  }
  changedOptions() {
    if (this.options.api && this.options.api.optionsChanged) {
      this.options.api.optionsChanged();
    }
  }
  selectSubmit(e): void {
    this.currentElement = null;
    this.currentElementId = null;
  }
}
