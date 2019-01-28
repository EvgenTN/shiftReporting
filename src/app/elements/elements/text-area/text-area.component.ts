import { Component, OnInit } from '@angular/core';
import { ElementType } from '../../models';
import { ElementsService } from '../../elements.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-text-area',
  templateUrl: './text-area.component.html',
  styleUrls: ['./text-area.component.scss']
})
export class TextAreaComponent implements OnInit {

  private _element: ElementType;
  private _form: FormGroup;

  constructor(
    public elementsService: ElementsService
  ) { }

  ngOnInit() {
    this.getData();
  }

  getData(): void {
    this.elementsService.element
      .subscribe(value => this._element = value);
    this.elementsService.form
      .subscribe(value => this._form = value);
  }
}
