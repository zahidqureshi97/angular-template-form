import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { User } from '../assets/User';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiUrl:string = "https://reqres.in/api/users";

  constructor(private http: HttpClient) { }

  GetApi(){
    return this.http.get( this.apiUrl).pipe(
           map((data: User[]) => {
             return data;
           }), catchError( error => {
             return throwError( 'ERROR!' );
           })
        )
  }

  createUser(user: User[]) {
    return this.http.post(this.apiUrl,user).
        pipe(
           map((data: any) => {
             return data;
           }), catchError( error => {
             return throwError( 'ERROR!' );
           })
        )
    }
}
