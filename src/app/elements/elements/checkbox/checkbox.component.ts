import { Component, OnInit } from '@angular/core';
import { ElementsService } from '../../elements.service';
import { ElementType } from '../../models';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {

  private _element: ElementType;

  constructor(
    public elementsService: ElementsService
  ) { }

  ngOnInit() {
    this.elementsService.element
      .subscribe(value => {
        this._element = value;
      });
  }
}
