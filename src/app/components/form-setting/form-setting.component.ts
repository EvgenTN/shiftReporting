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
  // @Output() selectSubmit: EventEmitter<any> = new EventEmitter();
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
    // console.log(this.element);
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
    // console.log(this.element.settings);
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
      this.element.settings[id].value = this.element.getValue(item.key);
      group.addControl(item.key, this.fb.control(this.element.getValue(item.key)));
    });
    return group;
  }
  deleteItem() {
    // console.log('deleteItem');
    this.deleteElement.emit();
  }
}
