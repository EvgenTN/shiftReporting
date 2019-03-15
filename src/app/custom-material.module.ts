import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatInputModule, MatExpansionModule, MatCardModule, MatDividerModule, MatSelectModule } from '@angular/material';
import {MatIconModule} from '@angular/material/icon';

const MODULES = [
  BrowserAnimationsModule,
  MatButtonModule,
  MatIconModule,
  MatInputModule,
  MatExpansionModule,
  MatCardModule,
  MatDividerModule,
  MatSelectModule,
];

@NgModule({
  imports: [
    ...MODULES
  ],
  exports: [
    ...MODULES
  ]
})
export class CustomMaterialModule { }
