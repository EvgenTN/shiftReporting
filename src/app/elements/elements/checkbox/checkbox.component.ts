import { Component, OnInit } from '@angular/core';
import { ElementsService } from '../../elements.service';
import { ElementType } from '../../models';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {

  private _element: ElementType;
  private _form: FormGroup = new FormGroup({});

  constructor(
    private elementsService: ElementsService,
    private fb: FormBuilder,
  ) {

  }

  ngOnInit() {
    this.getData();
  }

  getData(): void {
    this.elementsService.element
      .subscribe(value => this._element = value);
    this.elementsService.form
      .subscribe(value => {
        if (value) {
          this._form = value;
        } else {
          this._form = this.formInit();
        }
      });
  }

  formInit(): FormGroup {
    const group = this.fb.group({});
    group.addControl(this._element.key, this.fb.control(this._element.value));
    return group;
  }
}
