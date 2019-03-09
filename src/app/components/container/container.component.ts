import { Component, OnInit } from '@angular/core';
import { ShiftReportingService } from 'src/app/shift-reporting.service';
import { GridsterConfig, GridsterItem } from 'angular-gridster2';
import { FormElement } from 'src/app/models';
import { FormGroup, FormBuilder } from '@angular/forms';

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

  containerForm: FormGroup;

  constructor(
    private shiftReportingService: ShiftReportingService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    Object.assign(this.options, this.shiftReportingService.getGridsterOptions());
    this.getDashboard();
    this.containerForm = this.formInit();
  }

  getDashboard(): void {
    this.shiftReportingService.dashboard.subscribe(value => {
      this.dashboard = this.shiftReportingService.createDashboard(value);
    });
  }

  formInit(): FormGroup {
    const group: FormGroup = this.fb.group({});
    this.dashboard.map((item, id) => {
      group.addControl(item.element.key, this.fb.control(item.element.getValue('value')));
    });
    return group;
  }
  submit() {
    // console.log(this.containerForm.value);
  }
}
