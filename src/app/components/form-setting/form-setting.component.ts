import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
// import { FormElementBase } from 'src/app/formElementBase';


@Component({
  selector: 'app-form-setting',
  templateUrl: './form-setting.component.html',
  styleUrls: ['./form-setting.component.scss']
})
export class FormSettingComponent implements OnInit, OnChanges {
  @Input() formElement;
  @Output() setElement: EventEmitter<any> = new EventEmitter();
  @Output() deleteElement: EventEmitter<any> = new EventEmitter();
  @Output() selectSubmit: EventEmitter<any> = new EventEmitter();

  controlTypes = [
    { key: 'textbox', value: 'Textbox' },
    { key: 'dropdown', value: 'Dropdown' },
    { key: 'textarea', value: 'Text area' },
  ];

  elementSettingForm: FormGroup;

  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
    // console.log('FormSettingComponent init');
    this.formInit();
    this.elementSettingForm.valueChanges
      .subscribe((value) => this.setOutputElement(value));
    this.formFill();
  }

  formInit(): void {
    this.elementSettingForm = this.fb.group({
      label: '',
      controlType: '',
      optionsStr: '',
    });
  }

  formFill(): void {
    switch (this.formElement.controlType) {
      case 'dropdown':
        this.elementSettingForm.setValue({
          label: this.formElement.label || '',
          controlType: this.formElement.controlType,
          optionsStr: this.formElement.options.join('\n') || '',
        });
        break;
      default:
        this.elementSettingForm.setValue({
          label: this.formElement.label || '',
          controlType: this.formElement.controlType,
          optionsStr: '',
        });
    }
  }




  setOutputElement(value): void {
    const result = {
      label: value.label,
      controlType: value.controlType,
    };
    if (value.controlType !== 'textarea') {
      result['rows'] = 1;
      result['cols'] = 9;

    } else if (this.formElement.rows === 1) { result['rows'] = 2; }

    if (value.optionsStr) {
      result['options'] = value.optionsStr.split('\n');
      result['options'] = result['options'].filter(item => !!item);
    }
    if (value.controlType === 'textarea') {
      result['resizeEnabled'] = true;
    } else { result['resizeEnabled'] = false; }
    this.setElement.emit(result);

  }

  ngOnChanges() {
    if (this.elementSettingForm) { this.formFill(); }
  }


  dltElement($event): void {

    this.deleteElement.emit($event);
  }
  onSubmit($event): void {

    this.selectSubmit.emit($event);
  }
}
