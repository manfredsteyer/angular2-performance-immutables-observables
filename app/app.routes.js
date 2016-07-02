"use strict";
var home_component_1 = require('./home/home.component');
var flight_search_component_1 = require('./flight-search/flight-search.component');
exports.APP_ROUTES = [
    {
        path: '/home',
        component: home_component_1.HomeComponent,
        index: true
    },
    {
        path: '/flight-search',
        component: flight_search_component_1.FlightSearchComponent
    }
];
//# sourceMappingURL=app.routes.js.map