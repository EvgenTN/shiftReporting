import { Component, OnInit } from '@angular/core';
import { ElementsService } from '../../elements.service';
import { ElementType } from '../../models';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  private _element: ElementType;
  private _form: FormGroup;

  constructor(
    public elementsService: ElementsService
  ) { }

  ngOnInit() {
    this.getData();
    // console.log(this.form);
    // console.log(this.element);
  }

  getData(): void {
    this.elementsService.element
      .subscribe(value => this._element = value);
    this.elementsService.form
      .subscribe(value => this._form = value);
    // console.log(this._element);

  }
}
