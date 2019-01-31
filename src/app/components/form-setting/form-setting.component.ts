import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { ShiftReportingService } from 'src/app/shift-reporting.service';
import { ControlType } from 'src/app/models';
import { ElementType, ElementDropdown, ElementLabel } from 'src/app/elements/models';
import { CheckboxComponent } from 'src/app/elements/elements';


@Component({
  selector: 'app-form-setting',
  templateUrl: './form-setting.component.html',
  styleUrls: ['./form-setting.component.scss']
})
export class FormSettingComponent implements OnInit, OnChanges {
  @Input() element: ElementType;
  @Output() changeElementType: EventEmitter<any> = new EventEmitter();
  @Output() deleteElement: EventEmitter<any> = new EventEmitter();
  @Output() selectSubmit: EventEmitter<any> = new EventEmitter();
  @Output() setElement: EventEmitter<any> = new EventEmitter();


  controlTypes: ControlType[] = [];
  elementType = new FormControl();
  selectControlType = new ElementDropdown();
  checkboxComponent = CheckboxComponent;
  settingsForm: FormGroup;


  constructor(
    private shiftReportingService: ShiftReportingService,
    private fb: FormBuilder,
  ) { }



  ngOnInit() {
    this.controlTypes = this.shiftReportingService.getControlTypes();
    this.updateElementType();
    this.selectControlType.options = this.controlTypes;
    this.elementType.valueChanges
      .subscribe(value => {
        if (value.component !== this.element.component) {
          this.changeElementType.emit(value);
        }
      });

  }
  ngOnChanges() {
    this.settingsForm = this.formInit();
    this.settingsForm.valueChanges
      .subscribe((value) => {
        this.setElement.emit(value);

      });
    this.updateElementType();

  }

  updateElementType() {
    this.elementType.setValue(
      this.controlTypes.find(item => item.component === this.element.component)
    );
  }

  formInit(): FormGroup {
    const group: FormGroup = this.fb.group({});
    this.element.settings.map((item, id) => {
      this.element.settings[id].value = this.element[item.key];
      group.addControl(item.key, this.fb.control(this.element[item.key]));
    });
    return group;
  }

  // setElementOutput(value): void {
  //   this.element.settings.map(item => {
  //     this.element[item.key] = value[item.key];
  //   });
  //   this.setElement.emit(value);
  // }



  // formInit(): void {
  //   this.elementSettingForm = this.fb.group({
  //     name: '',
  //     label: '',
  //     controlType: '',
  //     optionsStr: '',
  //   });
  // }

  // formFill(): void {
  //   switch (this.formElement.controlType) {
  //     case 'dropdown':
  //       this.elementSettingForm.setValue({
  //         label: this.formElement.label || '',
  //         controlType: this.formElement.controlType,
  //         optionsStr: this.formElement.options.join('\n') || '',
  //       });
  //       break;
  //     default:
  //       this.elementSettingForm.setValue({
  //         label: this.formElement.label || '',
  //         controlType: this.formElement.controlType,
  //         optionsStr: '',
  //       });
  //   }
  // }




  // setOutputElement(value): void {
  //   const result = {
  //     label: value.label,
  //     controlType: value.controlType,
  //   };
  //   if (value.controlType !== 'textarea') {
  //     result['rows'] = 1;
  //     result['cols'] = 9;

  //   } else if (this.formElement.rows === 1) { result['rows'] = 2; }

  //   if (value.optionsStr) {
  //     result['options'] = value.optionsStr.split('\n');
  //     result['options'] = result['options'].filter(item => !!item);
  //   }
  //   if (value.controlType === 'textarea') {
  //     result['resizeEnabled'] = true;
  //   } else { result['resizeEnabled'] = false; }
  //   this.setElement.emit(result);

  // }

  // dltElement($event): void {
  //   this.deleteElement.emit($event);
  // }
  // onSubmit($event): void {
  //   this.selectSubmit.emit($event);
  // }
}
