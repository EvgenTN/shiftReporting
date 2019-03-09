import { Component, OnInit } from '@angular/core';
import { appRouters } from './app-routing.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  appRouters = appRouters;
  title = 'Shift Reporting';
}
