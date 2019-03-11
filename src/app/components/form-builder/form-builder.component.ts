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
  isItemChange = false;
  isShowNewElement = false;
  isShowGridsterSettings = false;

  options: GridsterConfig = {
    itemChangeCallback: () => this.gridsterItemChange(),
    emptyCellDropCallback: this.emptyCellClick.bind(this),
    displayGrid: 'always',
    draggable: {
      // start: (item) => this.itemDragResize = { ...item },
      delayStart: 0,
      // ToDo
      enabled: true,
      ignoreContentClass: 'gridster-item-content',
      dragHandleClass: 'drag-handler',
      dropOverItems: false,
    },
    resizable: {
      enabled: true,
      // start: (item) => this.itemDragResize = { ...item },
    },
  };
  constructor(
    private srService: ShiftReportingService
  ) { }

  ngOnInit() {
    this.getDashboard();
    this.srService.gridsterOptions.subscribe(value => {
      console.log(value);
      Object.assign(this.options, value);
      this.changedOptions();
    });
    this.srService.currentElementId.subscribe(id => this.currentElementId = id);
  }

  gridsterItemChange(): void {
    this.srService.updateDashboardBuild(this.dashboard);
    this.isItemChange = true;
  }

  // confirmDashboard(): void {
  //   this.shiftReportingService.updateDashboard(this.dashboard);
  // }

  getDashboard(): void {
    this.srService.dashboardBuild.subscribe(value => {
      this.dashboard = value;
    });
  }

  setCurrentElement(item): void {
    event.preventDefault();
    if (this.currentElementId !== this.getElementId(item)) {
      this.srService.updateCurrentElementId(this.getElementId(item));
    } else if (!this.isItemChange) {
      this.srService.updateCurrentElementId(null);
    }
    this.isItemChange = false;
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
    const typeNewElement = this.srService.getTypeNewElement();
    const element = new typeNewElement;
    Object.assign(item, element.getGridsterItemOptions());
    this.dashboard.push({ gridster: item, element: element });
    this.srService.updateDashboardBuild(this.dashboard);
  }

  changedOptions() {
    if (this.options.api && this.options.api.optionsChanged) {
      this.options.api.optionsChanged();
    }
    this.srService.updateDashboardBuild(this.dashboard);
  }
  selectSubmit(e): void {
    this.currentElement = null;
    this.currentElementId = null;
  }
}
