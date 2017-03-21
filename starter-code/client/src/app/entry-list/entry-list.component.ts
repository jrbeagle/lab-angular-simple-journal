import { Component, OnInit } from '@angular/core';
import { EntryListServiceService } from '../entry-list-service.service'
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css'],
  providers: [EntryListServiceService]
})
export class EntryListComponent implements OnInit {

  entries: Array<Object> = [];
  errorMessage: string = '';

  constructor(
    private myRoute: ActivatedRoute,
    private myNavigator: Router,
    private myEntryService: EntryListServiceService) { }

  ngOnInit() {
    this.getEntryList();
  }

  getEntryList() {
    this.myEntryService.getEntries()
      .then((entryList) => {
        this.entries = entryList;
      })
      .catch((err) => {
        this.errorMessage = "There was an error. Try Again"
      })
  }

}
