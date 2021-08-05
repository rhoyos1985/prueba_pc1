import { Injectable } from '@angular/core';

import {HttpClient, HttpErrorResponse} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PruebaService {

  url = 'https://www.breakingbadapi.com/api/characters';

  constructor(private httpService: HttpClient) { }

  callApi() {
    return this.httpService.get(this.url)
  }
}
