import { Injectable } from '@angular/core';
import { ElementType, Element } from './models';
import { FormGroup } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class ElementsService {

  private _elementSource = new BehaviorSubject<ElementType>(null);
  element = this._elementSource.asObservable();

  private _formSource = new BehaviorSubject<FormGroup>(null);
  form = this._formSource.asObservable();



  constructor() { }

  setElement(element: ElementType): void {
    this._elementSource.next(element);
  }

  setForm(form: FormGroup): void {
    this._formSource.next(form);
  }

  // getElement(): ElementType {
  //   return this.element;
  // }

  // setElement(value: ElementType): void {
  //   // console.log('set', value);

  //   this.element = { ...value };
  // }

  // getForm(): FormGroup {
  //   return this.form;
  // }

  // setForm(value: FormGroup): void {
  //   this.form = value;
  // }
}