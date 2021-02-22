import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ApiService } from '../http.service';

@Component({
  selector: 'app-fetch-api',
  templateUrl: './fetch-api.component.html',
  styleUrls: ['./fetch-api.component.css']
})
export class FetchAPIComponent implements OnInit {

  users: any =[];

  constructor(private apiService:ApiService) { }

  ngOnInit(): void {
    this.GetData();

  }

  async GetData() {
    this.apiService.GetApi().subscribe(
      (data) => {
        this.users = data.data;
        console.log(this.users)
      }
    );
    //  this.Detailurl = "/";
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
