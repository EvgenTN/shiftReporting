import { Component, OnInit } from '@angular/core';
import { ElementsService } from '../../elements.service';
import { ElementInput, ElementType } from '../../models';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  private element: ElementType;

  constructor(
    public elementsService: ElementsService
  ) { }

  ngOnInit() {
    this.element = this.elementsService.getElement();
  }
}
