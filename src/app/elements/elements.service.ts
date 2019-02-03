import { Injectable } from '@angular/core';
import { ElementType } from './models';
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
    // console.log('setElement', element.settings);
    this._elementSource.next(element);
  }

  setForm(form: FormGroup): void {
    this._formSource.next(form);
  }
}
