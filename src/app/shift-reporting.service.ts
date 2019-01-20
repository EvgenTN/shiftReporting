import { Injectable, Component } from '@angular/core';
import { GridsterConfig, GridsterItem } from 'angular-gridster2';
import { Observable, of } from 'rxjs';
import { options } from './data/gridsterOptions';
import { dashboard } from './data/dashboard';
import { ControlType, FormElement } from './models';
import { controlTypes } from './data/controlTypes';
import { ElementType } from './elements/models';


@Injectable({ providedIn: 'root' })
export class ShiftReportingService {

  dashboard = dashboard;

  constructor() { }

  getGridsterOptions(): GridsterConfig {
    return options;
  }

  getDashboard(): Observable<FormElement[]> {
    return of(this.dashboard);
  }

  getControlTypes(): ControlType[] {
    return controlTypes;
  }

  getControlTypeCompByKey(key: string): Component {
    return controlTypes.find(item => item.key === key).component;
  }
  setDashboard(newdashboard: FormElement[]): void {
    this.dashboard = [...newdashboard];

  }
}
