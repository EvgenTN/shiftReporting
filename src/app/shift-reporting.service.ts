import { Injectable, Component } from '@angular/core';
import { GridsterConfig, GridsterItem } from 'angular-gridster2';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { options } from './data/gridsterOptions';
import { dashboard } from './data/dashboard';
import { ControlType, FormElement } from './models';
import { controlTypes } from './data/controlTypes';
import { ElementType } from './elements/models';


@Injectable({ providedIn: 'root' })
export class ShiftReportingService {

  private dashboardSource = new BehaviorSubject<FormElement[]>(dashboard);
  dashboard = this.dashboardSource.asObservable();


  constructor() { }

  updateDashboard(data: FormElement[]): void {
    this.dashboardSource.next(data);
  }

  getGridsterOptions(): GridsterConfig {
    return options;
  }

  getControlTypes(): ControlType[] {
    return controlTypes;
  }

  getControlTypeComponentByKey(key): any {
    return this.getControlTypes().find(item => item.key === key).component;
  }

  getControlTypeCompByKey(key: string): Component {
    return controlTypes.find(item => item.key === key).component;
  }

}
