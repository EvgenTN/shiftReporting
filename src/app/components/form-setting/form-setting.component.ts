import { Component, OnInit, OnChanges, Input, Output, EventEmitter, OnDestroy, HostListener } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { ShiftReportingService } from 'src/app/shift-reporting.service';
import { ControlType } from 'src/app/models';
import { ElementType, ElementDropdown } from 'src/app/elements/models';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-form-setting',
  templateUrl: './form-setting.component.html',
  styleUrls: ['./form-setting.component.scss']
})
export class FormSettingComponent implements OnInit, OnDestroy {


  private _currentElementIdSubscribe: Subscription;
  private _settingsFormSubscribe: Subscription;
  private _elementTypeSubscribe: Subscription;

  element: ElementType;
  currentElementId: number;
  controlTypes: ControlType[] = [];
  elementType: FormGroup;
  settingsForm: FormGroup;

  constructor(
    private shiftReportingService: ShiftReportingService,
    private fb: FormBuilder,
  ) { }
  // Function Removing element press key "delete"
  // @HostListener('document:keyup', ['$event'])
  // handleDeleteKeyboardEvent(event: KeyboardEvent) {
  //   if (event.key === 'Delete') {
  //     this.removeElement();
  //   }
  // }

  ngOnInit() {
    this.controlTypes = this.shiftReportingService.getControlTypes();
    this.onChangeElementId();
  }
  ngOnDestroy() {
    this._currentElementIdSubscribe.unsubscribe();
  }

  onChangeElementId() {
    this._currentElementIdSubscribe = this.shiftReportingService.currentElementId.subscribe(value => {
      if (value === null) { return 0; }
      this.currentElementId = value;
      this.element = this.shiftReportingService.getDashboardBuildElementById(value);
      this.elementType = this.formTypeInit();
      this.elementType.patchValue({
        controlTypes: this.shiftReportingService.getControlTypeByKey(this.element.componentKey),
        name: this.shiftReportingService.getControlTypeByKey(this.element.componentKey).value
      });
      this.elementType.valueChanges.subscribe(val => {
        this.shiftReportingService.changeElementType(val.controlTypes, this.currentElementId);
      });
      this.settingsForm = this.formInit();
      this.settingsForm.valueChanges.subscribe(val => {
        this.shiftReportingService.changeSettingElement(val, this.currentElementId);
      });
    });

  }

  formTypeInit(): FormGroup {
    const result = this.fb.group({
      controlTypes: [this.controlTypes],
    });
    return result;
  }


  formInit(): FormGroup {
    const group: FormGroup = this.fb.group({});
    this.element.settings.map((item, id) => {
      this.element.settings[id].value = this.element.getValue(item.key);
      group.addControl(item.key, this.fb.control(this.element.getValue(item.key)));
    });
    return group;
  }

  removeElement() {
    this.shiftReportingService.removeElementDashboardBuild(this.currentElementId);
  }
}
