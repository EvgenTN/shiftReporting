import { Component, OnInit } from '@angular/core';
import { FormElementBase } from 'src/app/formElementBase';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {
  form = [
    new FormElementBase({
      value: 'T',
      key: 'string',
      label: 'string',
      required: true,
      order: 1,
      controlType: 'text',
    }),
    new FormElementBase({
      value: 'T2',
      key: 'string2',
      label: 'string2',
      required: true,
      order: 2,
      controlType: 'radio',
    }),
  ];

  // form = [
  //   {
  //     id: 0,
  //     type: 'text',
  //   },
  //   {
  //     id: 1,
  //     type: 'select',
  //   }
  // ]

  constructor() { }

  ngOnInit() {
  }

}
