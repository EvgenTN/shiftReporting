import { Component, OnInit } from '@angular/core';
import { GridsterConfig, GridsterItem } from 'angular-gridster2';
import { ShiftReportingService } from 'src/app/shift-reporting.service';
import { FormElement, ControlType } from '../../models';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.scss']
})
export class FormBuilderComponent implements OnInit {

  dashboard: FormElement[];
  resaltDashboard: FormElement[];
  currentElement: FormElement = null;
  currentElementId: number;
  itemDragResize: GridsterItem;

  options: GridsterConfig = {
    itemChangeCallback: () => this.shiftReportingService.updateDashboardBuild(this.dashboard),
    emptyCellDropCallback: this.emptyCellClick.bind(this),
    displayGrid: 'always',
    draggable: {
      start: (item) => this.itemDragResize = { ...item },
      delayStart: 0,
      // ToDo
      enabled: true,
      ignoreContentClass: 'gridster-item-content',
      dragHandleClass: 'drag-handler',
      dropOverItems: false,
    },
    resizable: {
      enabled: true,
      start: (item) => this.itemDragResize = { ...item },
    },
  };


  constructor(
    private shiftReportingService: ShiftReportingService
  ) { }

  ngOnInit() {
    Object.assign(this.options, this.shiftReportingService.getGridsterOptions());
    this.getDashboard();
    this.shiftReportingService.currentElementId.subscribe(id => this.currentElementId = id);
  }

  confirmDashboard(): void {
    this.shiftReportingService.updateDashboard(this.dashboard);
  }

  getDashboard(): void {
    this.shiftReportingService.dashboardBuild.subscribe(value => {
      this.dashboard = value;
    });
  }

  setCurrentElement(item): void {
    event.preventDefault();
    let isDragResize = false;
    // for (const key in item.gridster) {
    //   if (item.gridster.hasOwnProperty(key)) {
    //     if (item.gridster[key] !== this.itemDragResize[key] && !isDragResize) {
    //       isDragResize = true;
    //     }
    //     const element = item[key];
    //   }
    // }
    if (this.currentElement !== item && !isDragResize) {
      this.currentElement = item;
      this.shiftReportingService.updateCurrentElementId(this.getElementId(item));
    } else {
      // this.shiftReportingService.updateCurrentElementId(null);
      this.currentElement = null;
    }
  }

  getElementId(element): number {
    return this.dashboard.findIndex(item => item === element);
  }
  deleteElement($event): void {
    this.dashboard.splice(this.currentElementId, 1);
    this.currentElement = null;
    this.currentElementId = null;
  }

  emptyCellClick(event: MouseEvent, item: GridsterItem) {
    const typeNewElement = this.shiftReportingService.getTypeNewElement();
    const element = new typeNewElement;
    Object.assign(item, element.getGridsterItemOptions());
    this.dashboard.push({ gridster: item, element: element });
    this.shiftReportingService.updateDashboardBuild(this.dashboard);
  }

  changedOptions() {
    if (this.options.api && this.options.api.optionsChanged) {
      this.options.api.optionsChanged();
    }
    this.shiftReportingService.updateDashboardBuild(this.dashboard);
  }
  selectSubmit(e): void {
    this.currentElement = null;
    this.currentElementId = null;
  }
}
