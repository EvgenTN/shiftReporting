import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { ShiftReportingService } from 'src/app/shift-reporting.service';
import { ControlType, Element } from 'src/app/models';
import { ElementType, ElementDropdown, ElementLabel } from 'src/app/elements/models';
import { controlTypes } from 'src/app/data/controlTypes';


@Component({
  selector: 'app-form-setting',
  templateUrl: './form-setting.component.html',
  styleUrls: ['./form-setting.component.scss']
})
export class FormSettingComponent implements OnInit, OnChanges {
  @Input() element: ElementType;
  @Output() setElement: EventEmitter<any> = new EventEmitter();
  @Output() deleteElement: EventEmitter<any> = new EventEmitter();
  @Output() selectSubmit: EventEmitter<any> = new EventEmitter();

  elementSettings: FormGroup;
  controlTypes: ControlType[] = [];
  elementType = new FormControl();
  selectControlType = new ElementDropdown();

  settingsForm: FormGroup;

  rrr() {
    const group: FormGroup = this.fb.group({});
    this.element.settings.map(item => {
      group.addControl(item.key, this.fb.control(item.value));
    });

    return group;
  }

  constructor(
    private shiftReportingService: ShiftReportingService,
    private fb: FormBuilder,
  ) { }

  updateElementType() {
    this.elementType.setValue(
      this.controlTypes.find(item => item.component === this.element.component)
    );
  }

  ngOnInit() {
    this.controlTypes = this.shiftReportingService.getControlTypes();
    this.updateElementType();
    this.selectControlType.options = this.controlTypes;
    // console.log(this.element.settings);
    console.log(this.rrr());
    // this.rrr();
    // this.settingsForm = this.fb.group(this.rrr());
    this.settingsForm = this.rrr();



    this.elementType.valueChanges
      .subscribe(value => {
        this.setElement.emit(value);
      });
    // console.log(this.controlTypes);

    // // console.log('FormSettingComponent init');
    // this.formInit();
    // this.elementSettingForm.valueChanges
    //   .subscribe((value) => this.setOutputElement(value));
    // this.formFill();
  }



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

  ngOnChanges() {
    this.updateElementType();

    // console.log(this.element);

    // if (this.elementSettingForm) { this.formFill(); }
  }


  // dltElement($event): void {
  //   this.deleteElement.emit($event);
  // }
  // onSubmit($event): void {
  //   this.selectSubmit.emit($event);
  // }
}
