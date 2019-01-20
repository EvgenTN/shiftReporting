import { Injectable } from '@angular/core';
import { ElementType } from './models';
import { FormGroup } from '@angular/forms';

@Injectable()
export class ElementsService {

  private element: ElementType;
  private form: FormGroup;
  constructor() { }

  getElement(): ElementType {
    
    return this.element;
  }

  setElement(value: ElementType): void {
    // console.log('set', value);

    this.element = { ...value };
  }

  getForm(): FormGroup {
    return this.form;
  }

  setForm(value: FormGroup): void {
    this.form = value;
  }
}
