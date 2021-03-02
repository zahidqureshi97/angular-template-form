import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../assets/User';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ApiService } from '../http.service';

@Component({
  selector: 'app-fetch-api',
  templateUrl: './fetch-api.component.html',
  styleUrls: ['./fetch-api.component.css']
})
export class FetchAPIComponent implements OnInit {

  users: User[];
  //arr1: any =[{id: 7, first_name:'Zahid', last_name:'Qureshi', email:'zahidnqureshi@gmail.com', avatar:'https://tiny.cc/public/images/robot_small.png'}];
  
  constructor(private apiService:ApiService) { }

  ngOnInit(): void {
    /*this.apiService.GetApi().subscribe(users => {
        this.users = users;
        console.log(users);
    });*/
    this.users= [
        {
            id: 7,
            email: "michael.lawson@reqres.in",
            first_name: "Michael",
            last_name: "Lawson",
            avatar: "https://reqres.in/img/faces/7-image.jpg"
        },
        {
            id: 8,
            email: "lindsay.ferguson@reqres.in",
            first_name: "Lindsay",
            last_name: "Ferguson",
            avatar: "https://reqres.in/img/faces/8-image.jpg"
        },
        {
            id: 9,
            email: "tobias.funke@reqres.in",
            first_name: "Tobias",
            last_name: "Funke",
            avatar: "https://reqres.in/img/faces/9-image.jpg"
        },
        {
            id: 10,
            email: "byron.fields@reqres.in",
            first_name: "Byron",
            last_name: "Fields",
            avatar: "https://reqres.in/img/faces/10-image.jpg"
        },
        {
            id: 11,
            email: "george.edwards@reqres.in",
            first_name: "George",
            last_name: "Edwards",
            avatar: "https://reqres.in/img/faces/11-image.jpg"
        },
        {
            id: 12,
            email: "rachel.howell@reqres.in",
            first_name: "Rachel",
            last_name: "Howell",
            avatar: "https://reqres.in/img/faces/12-image.jpg"
        }
    ]
  }
}
