import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class EntryListServiceService {

  BASE_URL: string = 'http://localhost:3000';
  entries: Array<Object> = [];
  constructor(private myHttp: Http) {
  }

  getEntries() {
    return this.myHttp.get(`${this.BASE_URL}/api/journal-entries`)
      .toPromise()
      .then(entryList => entryList.json());
      }

  get(id) {
    return this.myHttp.get(`${this.BASE_URL}/api/journal-entries/${id}`)
      .toPromise()
      .then(apiResponse => apiResponse.json());
  }
}
