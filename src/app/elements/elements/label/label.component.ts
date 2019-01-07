import { Component, OnInit, Inject } from '@angular/core';
import { ElementsService } from '../../elements.service';
import { Element } from 'src/app/models';
import { ElementLabel, ElementType } from '../../models';

@Component({
  selector: 'app-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.scss']
})
export class LabelComponent implements OnInit {
  private element: ElementType;

  constructor(
    public elementsService: ElementsService
  ) { }

  ngOnInit() {
    this.element = this.elementsService.getElement();
  }
}
