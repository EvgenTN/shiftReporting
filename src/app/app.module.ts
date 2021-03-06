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
import { ElementsModule } from './elements/elements.module';
import { NewElementComponent } from './components/new-element/new-element.component';
import { GridsterSettingsComponent } from './components/gridster-settings/gridster-settings.component';
import { GridsterComponent } from './components/gridster/gridster.component';
import { FormFillerComponent } from './components/form-filler/form-filler.component';
import { CustomMaterialModule } from './custom-material.module';
import { EditComponent } from './components/edit/edit.component';

@NgModule({
  declarations: [
    AppComponent,
    FormBuilderComponent,
    ContainerComponent,
    InputComponent,
    FormSettingComponent,
    NewElementComponent,
    GridsterSettingsComponent,
    GridsterComponent,
    FormFillerComponent,
    EditComponent,
  ],
  imports: [
    BrowserModule,
    GridsterModule,
    ReactiveFormsModule,
    AppRoutingModule,
    ElementsModule,
    CustomMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
