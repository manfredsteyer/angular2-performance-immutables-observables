import { Component, provide } from '@angular/core';
import { Flight} from '../entities/flight';
import { FlightService} from '../services/flight.service';
import { ROUTER_DIRECTIVES} from '@angular/router';
import { FlightCardComponent} from '../flight-card/flight-card.component';

@Component({
    selector: 'flight-search', 
    template: require('./flight-search.component.html'),
    providers: [FlightService],
    directives: [ROUTER_DIRECTIVES, FlightCardComponent],
    styles: [require('./flight-search.component.css')]
})
export class FlightSearchComponent {

    public from: string = "Hamburg";
    public to: string = "Graz";
    
    constructor(private flightService: FlightService) {
    }

    public get flights() {
        return this.flightService.flights;
    }

    public get flights$() {
        return this.flightService.flights$;
    }

    delay() {
       this.flightService.delay();
    }

    search() {
        this
            .flightService
            .find(this.from, this.to)
            .subscribe(
                (flights: Array<Flight>) => { 
                    console.debug('got data');        
                },
                (errResp) => {
                    console.error(errResp)
                }
            ); 
    }    


}
