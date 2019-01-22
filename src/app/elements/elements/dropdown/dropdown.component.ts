import { Component, OnInit } from '@angular/core';
import { ElementsService } from '../../elements.service';
import { ElementType } from '../../models';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {
  private _element: ElementType;
  constructor(
    public elementsService: ElementsService
  ) { }

  ngOnInit() {
    this.elementsService.element
      .subscribe(value => this._element = value);
  }

}
