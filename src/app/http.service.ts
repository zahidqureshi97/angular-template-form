import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../assets/User';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiUrl:string = "https://reqres.in/api/users?page=1";

  constructor(private http: HttpClient) { }

  GetApi(): Observable<User[]> {
    return this.http.get<User[]>( this.apiUrl);
  }
}
