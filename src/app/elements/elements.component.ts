import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ElementsService } from './elements.service';
import { ElementType } from './models';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-elements',
  templateUrl: './elements.component.html',
  styleUrls: ['./elements.component.scss'],
  providers: [
    ElementsService
  ]
})
export class ElementsComponent implements OnInit, OnChanges {

  @Input() element: ElementType;
  @Input() form: FormGroup;

  constructor(public elementsService: ElementsService) {
  }

  ngOnChanges() {
    this.elementsService.setElement(this.element);
    this.elementsService.setForm(this.form);
  }

  ngOnInit() {
    // console.log(this.element);
    // console.log(this.form);
  }
}
