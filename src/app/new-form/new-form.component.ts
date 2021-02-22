import { Component } from '@angular/core';
import {FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-new-form',
  templateUrl: './new-form.component.html',
  styleUrls: ['./new-form.component.css']
})
export class NewFormComponent{
  reactiveForm: FormGroup;
  constructor(private formBuilder: FormBuilder){
    this.reactiveForm= formBuilder.group({
      name: new FormControl('',Validators.required),
      email: new FormControl('',[Validators.required,Validators.pattern('^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$')]),
      number: new FormControl('',[Validators.required,Validators.pattern('^[0-9]+$')]), 
      doB: new FormControl('', Validators.required)
    });
  }

  postData(){
    console.log(this.reactiveForm);
  };

}
