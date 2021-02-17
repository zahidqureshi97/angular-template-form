import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Form} from '../assets/Form';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  model = new Form("","","" ,new Date);
  submitted = false;
  onSubmit(templateForm: NgForm){
    this.submitted = true;
    console.log(templateForm);
  }
}


