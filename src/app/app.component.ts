import { Component, OnInit } from '@angular/core';
import { appRouters } from './app-routing.module';
import { ShiftReportingService } from './shift-reporting.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  appRouters = appRouters;
  title = 'Shift Reporting';
  constructor (
    private srs: ShiftReportingService
  ) {}

  save(event) {
    this.srs.save(event);
  }
}
