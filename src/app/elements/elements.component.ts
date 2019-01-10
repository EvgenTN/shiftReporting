import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ElementsService } from './elements.service';
import { ElementType } from './models';

@Component({
  selector: 'app-elements',
  templateUrl: './elements.component.html',
  styleUrls: ['./elements.component.scss'],
  providers: [
    ElementsService
  ]
})
export class ElementsComponent implements OnChanges {

  @Input() element: ElementType;

  constructor(public elementsService: ElementsService) { }

  ngOnChanges() {
    this.elementsService.setElement(this.element);
  }
}
