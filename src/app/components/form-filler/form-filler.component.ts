import { Component, OnInit } from '@angular/core';
import { ShiftReportingService } from 'src/app/shift-reporting.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormElement } from 'src/app/models';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-form-filler',
  templateUrl: './form-filler.component.html',
  styleUrls: ['./form-filler.component.scss']
})
export class FormFillerComponent implements OnInit {

  dashboard: FormElement[];
  form: FormGroup;

  constructor(
    private srService: ShiftReportingService,
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
    this.srService.dashboard.subscribe(value => {
      this.dashboard = value;
    });
    this.form = this.formInit();
    this.srService.updateFormFill(this.form.value);
    this.form.valueChanges.subscribe(value => {
      
      this.srService.updateFormFill(value);
    });

  }

  formInit(): FormGroup {
    const group: FormGroup = this.fb.group({});
    this.dashboard.map((item, id) => {
      group.addControl(item.element.key, this.fb.control(''));
    });
    return group;
  }
}
