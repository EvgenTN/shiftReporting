import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormBuilderComponent } from './components/form-builder/form-builder.component';
import { ContainerComponent } from './components/container/container.component';
import { InputComponent } from './components/input/input.component';

import { GridsterModule } from 'angular-gridster2';
import { ReactiveFormsModule } from '@angular/forms';
import { FormSettingComponent } from './components/form-setting/form-setting.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    FormBuilderComponent,
    ContainerComponent,
    InputComponent,
    FormSettingComponent,
  ],
  imports: [
    BrowserModule,
    GridsterModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
