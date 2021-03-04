import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../assets/User';
import { ApiService } from '../http.service';

@Component({
  selector: 'app-fetch-api',
  templateUrl: './fetch-api.component.html',
  styleUrls: ['./fetch-api.component.css']
})
export class FetchAPIComponent implements OnInit {

  users: User[];
  user: any = {};
  
  constructor(private apiService:ApiService) { }

  ngOnInit(): void {
    this.getUsers();
    }

  getUsers(){
    this.apiService.GetApi().subscribe((data: any) => {
        this.users = data.data;
        console.log(this.users);
    });
  }

  addUser(){
    this.apiService.createUser(this.user).subscribe((res)=>{
        console.log(this.user);
    });
  }
}
