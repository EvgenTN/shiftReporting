import { Component, OnInit } from '@angular/core';
import { FormElementBase } from 'src/app/formElementBase';
import { FormElementTextbox } from 'src/app/formElementTextbox';
import { ShiftReportingService } from 'src/app/shift-reporting.service';
import { GridsterConfig, GridsterItem } from 'angular-gridster2';
import { FormElement } from 'src/app/models';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {
  dashboard: FormElement[];
  options: GridsterConfig = {
    resizable: {
      enabled: false,
    }
  };

  constructor(
    private shiftReportingService: ShiftReportingService
  ) { }

  ngOnInit() {
    Object.assign(this.options, this.shiftReportingService.getGridsterOptions());
    this.getDashboard();
  }
  getDashboard(): void {
    this.shiftReportingService.dashboard
      .subscribe(value => {
        this.dashboard = value;
        // .map(item => {
        //   item.gridster.resizeEnabled = false;
        //   return item;
        // });
      });
  }
}
