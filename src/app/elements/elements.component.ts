import { Component, OnInit, Input } from '@angular/core';
// import { LabelComponent } from './elements/label/label.component';
import { GridsterItem } from 'angular-gridster2';

@Component({
  selector: 'app-elements',
  templateUrl: './elements.component.html',
  styleUrls: ['./elements.component.scss']
})
export class ElementsComponent implements OnInit {

  @Input() elementOptions: GridsterItem;

  constructor() { }

  ngOnInit() {
  }

}
