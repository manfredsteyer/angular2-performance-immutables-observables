import { Component, provide } from '@angular/core';
import { REACTIVE_FORM_DIRECTIVES, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Flight} from '../entities/flight';
import { FlightService} from '../services/flight.service';
import { ROUTER_DIRECTIVES} from '@angular/router';

@Component({
    selector: 'flight-search', 
    template: require('./flight-search.component.html'),
    providers: [FlightService],
    directives: [ROUTER_DIRECTIVES, REACTIVE_FORM_DIRECTIVES],
    styles: [require('./flight-search.component.css')]
})
export class FlightSearchComponentRf {

    public flights: Array<Flight> = [];

    private filter: FormGroup;

    constructor(private flightService: FlightService, fb: FormBuilder) {
        this.filter = fb.group({
            from: ['Graz', Validators.required],
            to: ['Hamburg', Validators.required]
        });

    }

    search() {

        let values = this.filter.value;

        this
            .flightService
            .find(values.from, values.to)
            .subscribe(
                (flights: Array<Flight>) => { 
                    this.flights = flights;        
                },
                (errResp) => {
                    console.error(errResp)
                }
            ); 
    }    


}
