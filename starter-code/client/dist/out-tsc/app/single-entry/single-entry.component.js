var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EntryListServiceService } from '../entry-list-service.service';
var SingleEntryComponent = (function () {
    function SingleEntryComponent(myRoute, myEntryService, myNavigator) {
        this.myRoute = myRoute;
        this.myEntryService = myEntryService;
        this.myNavigator = myNavigator;
        this.errorMessage = '';
    }
    SingleEntryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.myRoute.params.subscribe(function (params) {
            _this.getEntryDetails(params['id']);
        });
    };
    SingleEntryComponent.prototype.getEntryDetails = function (id) {
        var _this = this;
        console.log("Query for ID: " + id);
        this.myEntryService.get((id))
            .then(function (oneEntry) {
            console.log("Result: " + oneEntry.title + ", " + oneEntry.date + ", " + oneEntry.content);
            _this.entry = oneEntry;
        })
            .catch(function (err) {
            console.log('ERROR', err);
        });
    };
    return SingleEntryComponent;
}());
SingleEntryComponent = __decorate([
    Component({
        selector: 'app-single-entry',
        templateUrl: './single-entry.component.html',
        styleUrls: ['./single-entry.component.css'],
        providers: [EntryListServiceService]
    }),
    __metadata("design:paramtypes", [ActivatedRoute,
        EntryListServiceService,
        Router])
], SingleEntryComponent);
export { SingleEntryComponent };
//# sourceMappingURL=../../../../src/app/single-entry/single-entry.component.js.map