import { Injectable, Component } from '@angular/core';
import { GridsterConfig, GridsterItem } from 'angular-gridster2';
import { Observable, of } from 'rxjs';
import { options } from './data/gridsterOptions';
import { dashboard } from './data/dashboard';
import { ControlType, FormElement } from './models';
import { controlTypes } from './data/controlTypes';


@Injectable({ providedIn: 'root' })
export class ShiftReportingService {

  constructor() { }

  getGridsterOptions(): GridsterConfig {
    return options;
  }

  getDashboard(): Observable<FormElement[]> {
    return of(dashboard);
  }

  getControlTypes(): ControlType[] {
    return controlTypes;
  }

  getControlTypeCompByKey(key: string): Component {
    return controlTypes.find(item => item.key === key).component;
  }
}
