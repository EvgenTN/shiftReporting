import { Component, OnInit } from '@angular/core';
import { ElementsService } from '../../elements.service';
import { ElementType } from '../../models';
import { FormGroup, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {

  private _element: ElementType;
  private _form: FormGroup = new FormGroup({});
  private _isGridster: boolean;


  constructor(
    private elementsService: ElementsService,
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
    this.getData();
  }

  getData(): void {
    this._isGridster = this.elementsService.getIsGridster();
    this.elementsService.element
      .subscribe(value => this._element = value);
    this.elementsService.form
      .subscribe(value => {
        if (value) {
          this._form = value;
        } else {
          this._form = this.formInit();
        }
      });
  }

  formInit(): FormGroup {
    const group = this.fb.group({});
    group.addControl(this._element.key, this.fb.control(''));
    return group;
  }
}


//   ngOnInit() {
//     this.elementsService.element
//       .subscribe(value => {
//         this._element = value;
//       });
//     this.getForm();

//   }

//   getForm(): void {
//     this.elementsService.form
//       .subscribe(value => {
//         if (value) {
//           this._form = value;
//         } else {
//           this._form = this.formInit();
//         }
//       });
//   }
//   formInit(): FormGroup {
//     const group = this.fb.group({});
//     group.addControl(this._element.key, this.fb.control(this._element.value));
//     return group;
//   }
// }
