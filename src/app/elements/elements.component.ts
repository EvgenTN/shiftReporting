import { Component, OnInit, Input } from '@angular/core';
import { ElementsService } from './elements.service';
import { Element } from '../models';
import { LabelComponent } from './elements/label/label.component';

@Component({
  selector: 'app-elements',
  templateUrl: './elements.component.html',
  styleUrls: ['./elements.component.scss'],
  providers: [
    ElementsService
  ]
})
export class ElementsComponent implements OnInit {

  @Input() element: Element;

  constructor(public elementsService: ElementsService) { }

  ngOnInit() {
    this.elementsService.setElement(this.element);
    // console.log(this.element);
  }
 
}
