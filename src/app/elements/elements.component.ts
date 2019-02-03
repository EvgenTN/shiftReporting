import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ElementsService } from './elements.service';
import { ElementType } from './models';
import { FormGroup } from '@angular/forms';
import { ShiftReportingService } from '../shift-reporting.service';

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

  component: any = '';

  constructor(
    public elementsService: ElementsService,
    public shiftReportingService: ShiftReportingService,
  ) { }

  ngOnChanges() {
    // console.log(this.element);

    this.elementsService.setElement(this.element);
    // if (this.element) { console.log(this.element.value); }
    this.elementsService.setForm(this.form);
    this.component = this.shiftReportingService.getControlTypeComponentByKey(this.element.componentKey);
  }

  ngOnInit() {

  }
}
