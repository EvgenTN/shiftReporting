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

  initialDashboardBuild(): FormElement[] {
    let res: FormElement[];
    this.dashboard.subscribe(val => res = val);
    res = this.createDashboard(res);
    return res;
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

  getDashboardBuildElementById(id: number): ElementType {
    let res: FormElement;
    const dboardSubscribe = this.dashboardBuild.subscribe(value => res = this.createElement(value[id]));
    dboardSubscribe.unsubscribe();
    return res.element;
  }

  changeElementType(elementType: ControlType, elementId: number): void {
    let elementVar;
    let dboardBuild;
    const dboardBuildSubscribe = this.dashboardBuild.subscribe(value => {
      dboardBuild = value;
      elementVar = JSON.parse(JSON.stringify(value[elementId]));
      elementVar.element = { componentKey: elementType.key };
    });
    dboardBuildSubscribe.unsubscribe();
    dboardBuild[elementId] = this.createElement(elementVar);
    this.dashboardBuildSource.next(dboardBuild);
  }

  changeSettingElement(element: {}, elementId: number): void {
    let elementVar;
    let dboardBuild;
    const dboardBuildSubscribe = this.dashboardBuild.subscribe(value => {
      dboardBuild = value;
      // elementVar = JSON.parse(JSON.stringify(value[elementId]));
    });
    dboardBuildSubscribe.unsubscribe();
    Object.assign(dboardBuild[elementId].element, element);
    this.dashboardBuildSource.next(dboardBuild);
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
