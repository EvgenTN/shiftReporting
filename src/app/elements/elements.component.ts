import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ElementsService } from './elements.service';
import { ElementType } from './models';
import { FormGroup } from '@angular/forms';
import { dashboard } from '../data/dashboard';

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
  @Input() form: FormGroup;
  // @Input() dashboard;

  constructor(public elementsService: ElementsService) { }

  ngOnChanges() {
    this.elementsService.setElement(this.element);
    this.elementsService.setForm(this.form);
    // console.log('ElementsComponent', this.element);
  }
}
