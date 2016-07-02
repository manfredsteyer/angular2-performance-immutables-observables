import { Injectable } from '@angular/core';
import { Http, Headers, URLSearchParams } from '@angular/http';
import { Observable} from 'rxjs';
import { Flight} from '../entities/flight';
import { ReplaySubject} from 'rxjs';

@Injectable()
export class FlightService {

    constructor(private http: Http) {
    }

    public flights: Flight[];
    public flights$ = new ReplaySubject<Flight[]>(); 

    // Array<Flight>, Flight[]
    find(from: string, to: string): Observable<Flight[]> {
        
        let url = "http://www.angular.at/api/flight";
        
        let headers = new Headers();
        headers.set('Accept', 'text/json');

        let search = new URLSearchParams();
        search.set('from', from);
        search.set('to', to);

        return this.http
                    .get(url, { headers,search })
                    .map(resp => resp.json())
                    .do(flights => {
                        this.flights = flights;
                        this.flights$.next(flights);
                    });

    }

    delay() {
        const ONE_MINUTE = 1000 * 60;

        let oldFlights = this.flights;
        let oldFlight = oldFlights[0];  // Flight to change!
        let oldFlightDate = new Date(oldFlight.date); // Date to change 

        let newFlightDate = new Date(oldFlightDate.getTime() + ONE_MINUTE * 15);

        let newFlight =  {
                    id: oldFlight.id,
                    from: oldFlight.from,
                    to: oldFlight.to,
                    date: newFlightDate.toISOString()
        };
        
        let newFlights = [
                newFlight,
                ...oldFlights.slice(1, this.flights.length)
        ];

        this.flights = newFlights;
        this.flights$.next(newFlights);
    }

}