import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormBuilderComponent } from './components/form-builder/form-builder.component';
import { ContainerComponent } from './components/container/container.component';
import { FormFillerComponent } from './components/form-filler/form-filler.component';

export const appRouters = [
  { path: 'form-build', component: FormBuilderComponent, title: 'Builder', icon: 'build' },
  { path: 'form-filler', component: FormFillerComponent, title: 'Filler', icon: 'edit' },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRouters)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
