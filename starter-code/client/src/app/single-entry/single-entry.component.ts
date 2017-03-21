import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { EntryListServiceService } from '../entry-list-service.service'

@Component({
  selector: 'app-single-entry',
  templateUrl: './single-entry.component.html',
  styleUrls: ['./single-entry.component.css'],
  providers: [EntryListServiceService]
})
export class SingleEntryComponent implements OnInit {

  entry: Object;
  errorMessage: string = '';


  constructor( private myRoute: ActivatedRoute,
    private myEntryService: EntryListServiceService,
    private myNavigator: Router) { }

  ngOnInit() {
    this.myRoute.params.subscribe((params) => {
      this.getEntryDetails(params['id']);
    });
  }

  getEntryDetails(id) {
    console.log(`Query for ID: ${id}`);
    this.myEntryService.get((id))
      .then((oneEntry) => {
        console.log(`Result: ${oneEntry.title}, ${oneEntry.date}, ${oneEntry.content}`);
        this.entry = oneEntry;
      })
      .catch((err) => {
        console.log('ERROR', err);
      });

}
}
