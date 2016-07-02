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
var http_1 = require('@angular/http');
var rxjs_1 = require('rxjs');
var FlightService = (function () {
    function FlightService(http) {
        this.http = http;
        this.flights$ = new rxjs_1.ReplaySubject();
    }
    // Array<Flight>, Flight[]
    FlightService.prototype.find = function (from, to) {
        var _this = this;
        var url = "http://www.angular.at/api/flight";
        var headers = new http_1.Headers();
        headers.set('Accept', 'text/json');
        var search = new http_1.URLSearchParams();
        search.set('from', from);
        search.set('to', to);
        return this.http
            .get(url, { headers: headers, search: search })
            .map(function (resp) { return resp.json(); })
            .do(function (flights) {
            _this.flights = flights;
            _this.flights$.next(flights);
        });
    };
    FlightService.prototype.delay = function () {
        var ONE_MINUTE = 1000 * 60;
        var oldFlights = this.flights;
        var oldFlight = oldFlights[0]; // Flight to change!
        var oldFlightDate = new Date(oldFlight.date); // Date to change 
        var newFlightDate = new Date(oldFlightDate.getTime() + ONE_MINUTE * 15);
        var newFlight = {
            id: oldFlight.id,
            from: oldFlight.from,
            to: oldFlight.to,
            date: newFlightDate.toISOString()
        };
        var newFlights = [
            newFlight
        ].concat(oldFlights.slice(1, this.flights.length - 1));
        this.flights = newFlights;
        this.flights$.next(newFlights);
    };
    FlightService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], FlightService);
    return FlightService;
}());
exports.FlightService = FlightService;
//# sourceMappingURL=flight.service.js.map