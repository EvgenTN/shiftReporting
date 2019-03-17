import { Component, OnInit } from '@angular/core';
import { CheckboxComponent } from 'src/app/elements/elements';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  item = {
    gridster: {
      x: 0,
      y: 3,
      cols: 1,
      rows: 1,
      maxItemCols: 1,
      maxItemRows: 1,
    },
    element: {
      component: CheckboxComponent,
      name: '',
      isRequired: true,
      value: false,
      componentKey: 'checkbox',
      key: 'checkbox1552597193937',
    }
  };



  constructor() { }

  ngOnInit() {
  }

}
