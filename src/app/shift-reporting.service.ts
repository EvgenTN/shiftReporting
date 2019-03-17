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

  private formFillSource = new BehaviorSubject(null);
  formFill = this.formFillSource.asObservable();

  private currentElementIdSource = new BehaviorSubject<number>(null);
  currentElementId = this.currentElementIdSource.asObservable();

  private dashboardSource = new BehaviorSubject<FormElement[]>(dashboard);
  dashboard = this.dashboardSource.asObservable();

  private dashboardBuildSource = new BehaviorSubject<FormElement[]>(this.initialDashboardBuild());
  dashboardBuild = this.dashboardBuildSource.asObservable();

  private gridsterOptionsSource = new BehaviorSubject<GridsterConfig>(options);
  gridsterOptions = this.gridsterOptionsSource.asObservable();

  constructor() { }


  updateFormFill(data: GridsterConfig): void {
    this.formFillSource.next(data);
  }



  createNewDashboardElement(gridserItem: GridsterItem) {
    console.log('createNewDashboardElement');
    const dboard = this.dashboardBuildSource.value;
    // TODO  maxLength - length of new element
    let maxLength = 5;
    for (let i = 1; i <= maxLength; i++) {
      dboard.map(item => {
        if (item.gridster.x === gridserItem.x + i
          && item.gridster.y <= gridserItem.y
          && item.gridster.y + item.gridster.rows - 1 >= gridserItem.y) {
          maxLength = i;
        }
      });
    }

    const element = new this.typeNewElement;
    gridserItem.cols = maxLength;
    Object.assign(gridserItem, element.getGridsterItemOptions());
    dboard.push({ gridster: gridserItem, element: element });
    this.updateDashboardBuild(dboard);
  }

  updateGridsterOptions(data: GridsterConfig): void {
    this.gridsterOptionsSource.next(data);
  }

  save(pathname) {
    switch (pathname) {
      case 'form-build':
        this.updateCurrentElementId(null);
        this.updateDashboard(this.dashboardBuildSource.value);
        alert('Dashboard => ' + JSON.stringify(this.dashboardSource.value));
        alert('Gridster options => ' + JSON.stringify(this.gridsterOptionsSource.value));
        return;
      case 'form-filler':
        alert('Form => ' + JSON.stringify(this.formFillSource.value));
        return;
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
    const dboard: FormElement[] = this.dashboardBuildSource.value;
    dboard.splice(id, 1);
    this.updateDashboardBuild(dboard);
    this.updateCurrentElementId(null);
  }


  getDashboardBuildElementById(id: number): ElementType {
    return this.dashboardBuildSource.value[id].element;
  }

  changeElementType(elementType: ControlType, elementId: number): void {
    const elementVar = JSON.parse(JSON.stringify(this.dashboardBuildSource.value[elementId]));
    const dboardBuild = this.dashboardBuildSource.value;
    elementVar.element = { componentKey: elementType.key };
    dboardBuild[elementId] = this.createElement(elementVar);
    this.updateDashboardBuild(dboardBuild);
  }

  changeSettingElement(elementSet: {}, elementId: number): void {
    const dboardBuild = this.dashboardBuildSource.value;
    dboardBuild[elementId].element.setValue(elementSet);
    this.updateDashboardBuild(dboardBuild);
  }

  updateDashboard(data: FormElement[]): void {
    const delProp = [
      'gridsterItemOptions',
      'settings',
      '_gridsterItemOptions',
      '_settings',
      'maxItemCols',
      'maxItemRows',
      'resizeEnabled',
    ];
    const result: FormElement[] = data.map(item => {
      const varItem = JSON.parse(JSON.stringify(item));
      delProp.map(prop => {
        delete varItem.element[prop];
        delete varItem.gridster[prop];
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
