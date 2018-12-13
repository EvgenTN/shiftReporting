import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormBuilderComponent } from './components/form-builder/form-builder.component';
import { ContainerComponent } from './components/container/container.component';

export const appRouters = [
  { path: 'form-build', component: FormBuilderComponent, title: 'Form-build' },
  { path: 'container', component: ContainerComponent, title: 'Container' }
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
