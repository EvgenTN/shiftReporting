import { Injectable } from '@angular/core';
import { GridsterConfig, GridsterItem } from 'angular-gridster2';
import { Observable, of } from 'rxjs';
import { options } from './data/gridsterOptions';
import { dashboard } from './data/dashboard';


@Injectable({
  providedIn: 'root'
})
export class ShiftReportingService {

  constructor() { }
  
  getGridsterOptions(): GridsterConfig {
    return options;
  }
  getDashboard(): Observable<GridsterItem[]> {
    return of(dashboard);
  }

}


