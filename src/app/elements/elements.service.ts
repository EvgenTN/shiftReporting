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

  private _isGridsterSource = new BehaviorSubject<boolean>(false);
  isGridster = this._isGridsterSource.asObservable();

  constructor() { }

  getIsGridster(): boolean {
    return this._isGridsterSource.value;
  }
  setIsCridster(val: boolean) {
    this._isGridsterSource.next(val);
  }

  setElement(element: ElementType): void {
    this._elementSource.next(element);
  }

  setForm(form: FormGroup): void {
    this._formSource.next(form);
  }
}
