import { Component, OnInit } from '@angular/core';
import { ElementsService } from '../../elements.service';
import { ElementType } from '../../models';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {

  private _element: ElementType;
  private _form: FormGroup;

  constructor(
    private elementsService: ElementsService,

  ) { }

  ngOnInit() {
    this.elementsService.element
      .subscribe(value => {
        // console.log(value);
        this._element = value;
      });
    this.elementsService.form
      .subscribe(value => this._form = value);
  }
}
