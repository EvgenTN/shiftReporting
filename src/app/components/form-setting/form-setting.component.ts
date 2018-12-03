import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormElementBase } from 'src/app/formElementBase';

@Component({
  selector: 'app-form-setting',
  templateUrl: './form-setting.component.html',
  styleUrls: ['./form-setting.component.scss']
})
export class FormSettingComponent implements OnInit, OnChanges {
  @Input() formElement;
  @Output() setElement: EventEmitter<any> = new EventEmitter();

  elementSettingForm: FormGroup;

  controlTypes = [
    { key: 'textbox', value: 'Textbox' },
    { key: 'dropdown', value: 'Dropdown' },
  ];
  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
    console.log(this.formElement.key);
    this.formInit();
    this.elementSettingForm.valueChanges
      .subscribe(value => {
        // console.log(value);
      });
    this.formFill();
  }

  ngOnChanges() {
    if (this.elementSettingForm) { this.formFill(); }
  }

  formInit(): void {
    this.elementSettingForm = this.fb.group({
      label: [],
      controlType: [],
    });
  }
  formFill(): void {
    this.elementSettingForm.setValue({
      label: [this.formElement.key],
      controlType: [this.formElement.controlType]
    });
  }


  onSubmit(): void {
    console.log(this.elementSettingForm.value);
  }
}
