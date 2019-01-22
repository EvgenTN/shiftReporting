import { Component, OnInit, Inject } from '@angular/core';
import { ElementsService } from '../../elements.service';
import { ElementType } from '../../models';

@Component({
  selector: 'app-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.scss']
})
export class LabelComponent implements OnInit {
  private _element: ElementType;

  constructor(
    public elementsService: ElementsService
  ) { }

  ngOnInit() {
   this.elementsService.element
   .subscribe(value => this._element = value);
    // console.log(this.element);

  }
}
