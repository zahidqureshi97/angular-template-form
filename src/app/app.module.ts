import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NewFormComponent } from './new-form/new-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import { TemplateFormComponent } from './template-form/template-form.component';
import { FetchAPIComponent } from './fetch-api/fetch-api.component';
import {HttpClientModule} from '@angular/common/http';
import { UserItemComponent } from './user-item/user-item.component';

@NgModule({
  declarations: [
    AppComponent,
    NewFormComponent,
    TemplateFormComponent,
    FetchAPIComponent,
    UserItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
