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

  };

  form = [
    new FormElementTextbox({
      value: 'T',
      key: 'string',
      label: 'string',
      required: true,
      order: 1,
      controlType: 'textbox',
      type: 'text',
    }),
    new FormElementBase({
      value: 'T2',
      key: 'string2',
      label: 'string2',
      required: true,
      order: 2,
      controlType: 'dropdown',
    }),
  ];

  constructor(
    private shiftReportingService: ShiftReportingService
  ) { }

  ngOnInit() {
    Object.assign(this.options, this.shiftReportingService.getGridsterOptions());
    // this.getDashboard();
  }
  // getDashboard(): void {
  //   this.shiftReportingService.getDashboard()
  //     .subscribe(dashboard => this.dashboard = dashboard);
  // }
}
