import { Component, OnInit } from '@angular/core';
import { FormElementBase } from 'src/app/formElementBase';
import { FormElementTextbox } from 'src/app/formElementTextbox';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {
  form = [
    new FormElementTextbox({
      value: 'T',
      key: 'string',
      label: 'string',
      required: true,
      order: 1,
      controlType: 'textbox',
      type: 'text',
    }),
    new FormElementBase({
      value: 'T2',
      key: 'string2',
      label: 'string2',
      required: true,
      order: 2,
      controlType: 'dropdown',
    }),
  ];

  constructor() { }

  ngOnInit() {
  }

}
