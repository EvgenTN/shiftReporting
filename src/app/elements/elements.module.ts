import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElementsComponent } from './elements.component';
import { LabelComponent } from './elements/label/label.component';
import { InputComponent } from './elements/input/input.component';
import { DropdownComponent } from './elements/dropdown/dropdown.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CheckboxComponent } from './elements/checkbox/checkbox.component';
import { TextAreaComponent } from './elements/text-area/text-area.component';
import { CustomMaterialModule } from '../custom-material.module';

@NgModule({
  declarations: [ElementsComponent, LabelComponent, InputComponent, DropdownComponent, TextAreaComponent, CheckboxComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CustomMaterialModule,
  ],
  exports: [
    ElementsComponent,
  ],
  entryComponents: [
    LabelComponent,
    InputComponent,
    DropdownComponent,
    CheckboxComponent,
    TextAreaComponent
  ]
})
export class ElementsModule { }
