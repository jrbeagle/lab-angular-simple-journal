import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EntryListComponent } from './entry-list/entry-list.component';
import { SingleEntryComponent } from './single-entry/single-entry.component';

const routes: Routes = [
  {
    path: '',
    component: EntryListComponent
  },
  {
    path: 'entry/:id',
    component: SingleEntryComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
