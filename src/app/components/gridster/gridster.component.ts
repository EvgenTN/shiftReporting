import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ShiftReportingService } from 'src/app/shift-reporting.service';
import { GridsterConfig, GridsterItem } from 'angular-gridster2';
import { FormElement } from 'src/app/models';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-gridster',
  templateUrl: './gridster.component.html',
  styleUrls: ['./gridster.component.scss']
})
export class GridsterComponent implements OnInit {
  @Input() appointment: string;
  @Input() form: FormGroup;
  @Output() clickItem: EventEmitter<any> = new EventEmitter<any>();

  // config: GridsterConfig = {};
  width: string;
  height: string;

  optionsBuild: GridsterConfig = {
    itemChangeCallback: () => this.gridsterItemChange(),
    emptyCellDropCallback: this.emptyCellDrop.bind(this),
    enableEmptyCellClick: this.emptyCellDrop.bind(this),
    displayGrid: 'always',
    draggable: {
      delayStart: 0,
      enabled: true,
      dropOverItems: false,
    },
    resizable: {
      enabled: true,
    },
  };

  optionsFiller: GridsterConfig = {
    resizable: {
      enabled: false,
    }
  };


  isItemChange = false;
  options: GridsterConfig = {};
  optionsAppointment: GridsterConfig;
  dashboard: FormElement[];
  currentElementId: number;


  constructor(
    private srService: ShiftReportingService
  ) { }

  ngOnInit() {
    this.getData(this.appointment);
    this.srService.gridsterOptions.subscribe(value => {
      Object.assign(this.options, value, this.optionsAppointment);
      this.width = (value.minCols * value.fixedColWidth
        + value.outerMarginLeft
        + value.outerMarginRight + 5) + 'px'
        ;
        this.height = (value.minRows * value.fixedColWidth
          + value.outerMarginTop
          + value.outerMarginBottom + 5) + 'px'
          ;
      this.changedOptions();
    });
  }
  getData(appointment: string) {
    switch (appointment) {
      case 'build':
        this.optionsAppointment = this.optionsBuild;
        this.srService.dashboardBuild.subscribe(value => this.dashboard = value);
        this.srService.currentElementId.subscribe(value => this.currentElementId = value);
        return;
      case 'filler':
        this.optionsAppointment = this.optionsFiller;
        this.srService.dashboard.subscribe(value => {
          this.dashboard = value;
        });
        return;
      default:
        return;
    }
  }
  gridsterItemChange(): void {
    this.srService.updateDashboardBuild(this.dashboard);
    this.isItemChange = true;
  }
  setCurrentElement(id): void {
    if (this.appointment === 'build') {
      event.preventDefault();
    }
    if (this.currentElementId !== id) {
      this.srService.updateCurrentElementId(id);
    } else if (!this.isItemChange) {
      this.srService.updateCurrentElementId(null);
    }
    this.isItemChange = false;
  }
  changedOptions() {
    if (this.options.api && this.options.api.optionsChanged) {
      this.options.api.optionsChanged();
    }
  }

  emptyCellDrop(event: MouseEvent, item: GridsterItem) {
    this.srService.createNewDashboardElement(item);
  }
}
