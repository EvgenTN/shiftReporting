import { Component, OnInit } from '@angular/core';
import { ShiftReportingService } from 'src/app/shift-reporting.service';
import { ControlType } from 'src/app/models';

@Component({
  selector: 'app-new-element',
  templateUrl: './new-element.component.html',
  styleUrls: ['./new-element.component.scss']
})
export class NewElementComponent implements OnInit {
  controlTypes: ControlType[] = [];

  constructor(
    private shiftReportingService: ShiftReportingService
  ) { }

  ngOnInit() {
    this.controlTypes = this.shiftReportingService.getControlTypes();
  }
  setTypeNewElement(elementClass) {
    this.shiftReportingService.setTypeNewElement(elementClass);
  }
}
