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
  @Input() isNoBorder: boolean;

  constructor(public elementsService: ElementsService) {
  }

  ngOnChanges() {
    // console.log('element');
    this.elementsService.setElement(this.element);
    this.elementsService.setForm(this.form);
  }

  ngOnInit() {
    // console.log(this.element);
    // console.log(this.form);
  }
}
