import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormBuilderComponent } from './components/form-builder/form-builder.component';
import { ContainerComponent } from './components/container/container.component';

const appRouters = [
  { path: 'form-build', component: FormBuilderComponent },
  { path: 'container', component: ContainerComponent }
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
