import { Component, OnInit } from '@angular/core';
import { GridsterConfig, GridsterItem } from 'angular-gridster2';
import { ShiftReportingService } from 'src/app/shift-reporting.service';
import { FormElement } from '../../models';
import { ElementLabel } from 'src/app/elements/models';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.scss']
})
export class FormBuilderComponent implements OnInit {

  dashboard: FormElement[];
  currentElement: FormElement = null;
  dragNewElement = new ElementLabel('New label');
  currentElementId: number;

  options: GridsterConfig = {
    emptyCellDropCallback: this.emptyCellClick.bind(this),
    displayGrid: 'always',
    draggable: {
      delayStart: 0,
      // ToDo
      enabled: true,
      ignoreContentClass: 'gridster-item-content',
      dragHandleClass: 'drag-handler',
      dropOverItems: false,
    },
    resizable: {
      enabled: true,
    },
  };


  constructor(
    private shiftReportingService: ShiftReportingService
  ) { }

  ngOnInit() {
    Object.assign(this.options, this.shiftReportingService.getGridsterOptions());
    this.getDashboard();
  }

  getDashboard(): void {
    this.shiftReportingService.dashboard.subscribe(value => {
      this.dashboard = value;
      // TODO chose currentElement
      // this.currentElement = this.dashboard[0];
      // this.currentElementId = 0;
    });
  }

  setCurrentElement(item): void {
    console.log('setCurrentElement');

    event.preventDefault();
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

  changeElementType(element): void {
    // console.log(element);
    const item = new FormElement;
    item.element = new element.elementClass;
    Object.assign(this.dashboard[this.currentElementId].gridster, item.element.getGridsterItemOptions());
    this.dashboard[this.currentElementId].element = item.element;
    this.shiftReportingService.updateDashboard(this.dashboard);
    this.changedOptions();
  }

  setElement(element): void {
    console.log('setElement', element);
    this.dashboard[this.currentElementId].element.setValue(element);
    this.shiftReportingService.updateDashboard(this.dashboard);
  }

  deleteElement($event): void {
    this.dashboard.splice(this.currentElementId, 1);
    this.currentElement = null;
    this.currentElementId = null;
  }

  emptyCellClick(event: MouseEvent, item: GridsterItem) {
    const element = new ElementLabel;
    Object.assign(item, element.getGridsterItemOptions());
    this.dashboard.push({ gridster: item, element: element });
    console.log(element);
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
