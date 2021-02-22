import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';

export class myData{
    constructor(
    public id: number,
    public email: string,
    public firstName: string,
    public lastName: string,
    public avatar: string){}
}


@Component({
  selector: 'app-fetch-api',
  templateUrl: './fetch-api.component.html',
  styleUrls: ['./fetch-api.component.css']
})
export class FetchAPIComponent implements OnInit {

  users: myData[];

  constructor(private _url: HttpClient) { }

  ngOnInit(): void {
    this.getMyData();

  }

  getMyData(){
      return this._url.get<myData[]>('https://reqres.in/api/users?page=' + this.page).subscribe(users => {
        this.users = users;
        console.log(users);
      })
    }

  page: number = 1;
    /*
    setPage(page){
      if(this.handleNextPage)
        if (page < 2)
          page + 1;
      else if(this.handlePrevPage)
        if(page > 1)
          page - 1;
      }

    handlePrevPage() {
		this.setPage(page - 1);
	}

	handleNextPage() {
		setPage(page + 1);
	}*/
}
