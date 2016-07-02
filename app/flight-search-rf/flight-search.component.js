"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var flight_service_1 = require('../services/flight.service');
var router_1 = require('@angular/router');
var FlightSearchComponentRf = (function () {
    function FlightSearchComponentRf(flightService, fb) {
        this.flightService = flightService;
        this.flights = [];
        this.filter = fb.group({
            from: ['Graz', forms_1.Validators.required],
            to: ['Hamburg', forms_1.Validators.required]
        });
    }
    FlightSearchComponentRf.prototype.search = function () {
        var _this = this;
        var values = this.filter.value;
        this
            .flightService
            .find(values.from, values.to)
            .subscribe(function (flights) {
            _this.flights = flights;
        }, function (errResp) {
            console.error(errResp);
        });
    };
    FlightSearchComponentRf = __decorate([
        core_1.Component({
            selector: 'flight-search',
            template: require('./flight-search.component.html'),
            providers: [flight_service_1.FlightService],
            directives: [router_1.ROUTER_DIRECTIVES, forms_1.REACTIVE_FORM_DIRECTIVES],
            styles: [require('./flight-search.component.css')]
        }), 
        __metadata('design:paramtypes', [flight_service_1.FlightService, forms_1.FormBuilder])
    ], FlightSearchComponentRf);
    return FlightSearchComponentRf;
}());
exports.FlightSearchComponentRf = FlightSearchComponentRf;
//# sourceMappingURL=flight-search.component.js.map