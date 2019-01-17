import { Component, OnInit } from '@angular/core';
import { ElementsService } from '../../elements.service';
import { ElementType } from '../../models';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  private element: ElementType;
  private form: FormGroup;

  constructor(
    public elementsService: ElementsService
  ) { }

  ngOnInit() {
    this.element = this.elementsService.getElement();
    this.form = this.elementsService.getForm();
    
    // console.log(this.form);
    // console.log(this.element);
  }
}
