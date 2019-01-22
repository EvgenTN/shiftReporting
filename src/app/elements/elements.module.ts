import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElementsComponent } from './elements.component';
import { LabelComponent } from './elements/label/label.component';
import { InputComponent } from './elements/input/input.component';
import { DropdownComponent } from './elements/dropdown/dropdown.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ElementsComponent, LabelComponent, InputComponent, DropdownComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  exports: [
    ElementsComponent,
  ],
  entryComponents: [
    LabelComponent,
    InputComponent,
    DropdownComponent
  ]
})
export class ElementsModule { }
