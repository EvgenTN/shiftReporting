import { Injectable, Component } from '@angular/core';
import { GridsterConfig, GridsterItem } from 'angular-gridster2';
import { BehaviorSubject } from 'rxjs';
import { options } from './data/gridsterOptions';
import { dashboard } from './data/dashboard';
import { ControlType, FormElement } from './models';
import { controlTypes } from './data/controlTypes';
import { ElementType } from './elements/models';


@Injectable({ providedIn: 'root' })
export class ShiftReportingService {

  private typeNewElement = null;

  private currentElementIdSource = new BehaviorSubject<number>(null);
  currentElementId = this.currentElementIdSource.asObservable();

  private dashboardSource = new BehaviorSubject<FormElement[]>(dashboard);
  dashboard = this.dashboardSource.asObservable();

  private dashboardBuildSource = new BehaviorSubject<FormElement[]>(this.initialDashboardBuild());
  dashboardBuild = this.dashboardBuildSource.asObservable();

  constructor() { }

  save(event) {
    const path = event.target.formAction.slice(event.target.baseURI.length);
    switch (path) {
      case 'form-build':
        return this.updateDashboard(this.dashboardBuildSource.value);
      case 'container':
        return console.log('container');
      default:
        return console.log('Save default');
    }
  }

  initialDashboardBuild(): FormElement[] {
    return this.createDashboard(this.dashboardSource.value);
  }

  updateDashboardBuild(dboardBuild: FormElement[]): void {
    this.dashboardBuildSource.next(dboardBuild);
  }

  updateCurrentElementId(id: number): void {
    this.currentElementIdSource.next(id);
  }

  createDashboard(dboard: FormElement[]): FormElement[] {
    const arr = JSON.parse(JSON.stringify(dboard));
    return arr.map(item => {
      return this.createElement(item);
    });
  }

  createElement(element: FormElement): FormElement {
    const elementVar = JSON.parse(JSON.stringify(element));
    const res = new FormElement;
    const controlType = this.getControlTypeByKey(elementVar.element.componentKey);
    res.gridster = { ...elementVar.gridster };
    res.element = new controlType.elementClass;
    Object.assign(res.element, elementVar.element);
    Object.assign(res.gridster, res.element.getGridsterItemOptions());
    return res;
  }

  removeElementDashboardBuild(id: number): void {
    let dboard: FormElement[] = this.dashboardBuildSource.value;
    dboard.splice(id, 1);
    this.updateDashboardBuild(dboard);
    this.updateCurrentElementId(null);
  }


  getDashboardBuildElementById(id: number): ElementType {
    return this.dashboardBuildSource.value[id].element;
  }

  changeElementType(elementType: ControlType, elementId: number): void {
    const elementVar = JSON.parse(JSON.stringify(this.dashboardBuildSource.value[elementId]));;
    const dboardBuild = this.dashboardBuildSource.value;
    elementVar.element = { componentKey: elementType.key };
    dboardBuild[elementId] = this.createElement(elementVar);
    this.updateDashboardBuild(dboardBuild);
  }

  changeSettingElement(element: {}, elementId: number): void {
    const dboardBuild = this.dashboardBuildSource.value;
    Object.assign(dboardBuild[elementId].element, element);
    this.updateDashboardBuild(dboardBuild);
  }
  
  updateDashboard(data: FormElement[]): void {
    const delProp = [
      'gridsterItemOptions',
      'settings',
      '_gridsterItemOptions',
      '_settings',
    ];
    const result: FormElement[] = data.map(item => {
      const varItem = JSON.parse(JSON.stringify(item));
      delProp.map(prop => {
        delete varItem.element[prop];
      });
      return varItem;
    });
    this.dashboardSource.next(result);
  }

  setTypeNewElement(elementClass) {
    this.typeNewElement = elementClass;
  }
  getTypeNewElement() {
    return this.typeNewElement;
  }

  // getCurrentElementById(data: Array<FormElement>, id: number): FormElement {
  //   return data[id];
  // }

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
  getControlTypeByKey(key: string): ControlType {
    return controlTypes.find(item => item.key === key);
  }
}
