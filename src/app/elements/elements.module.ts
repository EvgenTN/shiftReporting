import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElementsComponent } from './elements.component';
import { LabelComponent } from './elements/label/label.component';
import { InputComponent } from './elements/input/input.component';
import { ElementsService } from './elements.service';

@NgModule({
  declarations: [ElementsComponent, LabelComponent, InputComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ElementsComponent
  ],
  entryComponents: [
    LabelComponent,
    InputComponent
  ]
})
export class ElementsModule { }
