import { Injectable } from '@angular/core';
import { Element } from '../models';

@Injectable()
export class ElementsService {

  private element: Element;

  constructor() { }

  getElement(): Element {
    // console.log('get >> ' + this.element.value);
    return this.element;
  }

  setElement(value: Element): void {
    // console.log('set >> ' + value.value);
    this.element = { ...value };
  }
}
