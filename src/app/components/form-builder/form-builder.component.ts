import { Component, OnInit } from '@angular/core';
import { GridsterConfig, GridsterItem } from 'angular-gridster2';
import { FormElementTextbox } from 'src/app/formElementTextbox';
import { ShiftReportingService } from 'src/app/shift-reporting.service';
import { dashboard } from 'src/app/data/dashboard';
import { FormElement, Element } from '../../models';
import { LabelComponent } from 'src/app/elements/elements';
import { ElementLabel } from 'src/app/elements/models/elementLabel';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.scss']
})
export class FormBuilderComponent implements OnInit {
  constructor(
    private shiftReportingService: ShiftReportingService
  ) { }
  // TODO chose currentElement
  // currentEplement: GridsterItem = null;
  currentElement: FormElement = dashboard[0];

  currentElementId: number;
  dragNewElement = new ElementLabel('New label');

  options: GridsterConfig = {
    emptyCellDropCallback: this.emptyCellClick.bind(this),
    displayGrid: 'always',
    draggable: {
      delayStart: 0,
      enabled: true,
      ignoreContentClass: 'gridster-item-content',
      dragHandleClass: 'drag-handler',
      dropOverItems: false,
    },
    resizable: {
      enabled: true,
    },
  };

  dashboard: FormElement[] = [];


  ngOnInit() {
    Object.assign(this.options, this.shiftReportingService.getGridsterOptions());
    this.getDashboard();
    console.log(new ElementLabel());
  }

  getDashboard(): void {
    this.shiftReportingService.getDashboard()
      .subscribe(value => this.dashboard = value);
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


  // setElement(element): void {
  //   const idElement = this.dashboard.findIndex(item => item === this.currentElement);
  //   Object.assign(this.dashboard[idElement], element);
  //   if (element.controlType !== 'dropdown') {
  //     delete this.dashboard[idElement].options;
  //   } else if (!element.options) {
  //     this.dashboard[idElement].options = [];
  //   }
  //   this.changedOptions();
  // }

  deleteElement($event): void {
    this.dashboard.splice(this.currentElementId, 1);
    this.currentElement = null;
    this.currentElementId = null;
  }



  emptyCellClick(event: MouseEvent, item: GridsterItem) {
    this.dashboard.push({ gridster: item, element: new ElementLabel() });
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
