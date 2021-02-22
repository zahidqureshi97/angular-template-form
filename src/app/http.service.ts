import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  GetApi() {
    return this.http.get<any>(
      "https://reqres.in/api/users?page=1"
    );
  }
}
