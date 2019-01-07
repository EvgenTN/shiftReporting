import { Injectable } from '@angular/core';
import { Element } from '../models';
import { ElementType } from './models';

@Injectable()
export class ElementsService {

  private element: ElementType;

  constructor() { }

  getElement(): ElementType {
    // console.log('get >> ' + this.element.value);
    return this.element;
  }

  setElement(value: ElementType): void {
    // console.log('set >> ' + value.value);
    this.element = { ...value };
  }
}
