import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NewFormComponent} from './new-form/new-form.component';
import {TemplateFormComponent} from './template-form/template-form.component';

const routes: Routes = [
  { path: 'newForm', component: NewFormComponent },
  { path: 'templateForm', component: TemplateFormComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}
