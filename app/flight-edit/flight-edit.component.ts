import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    template: `
        <h1>Flight Edit</h1>
        <p>
            ... {{id}} ...
        </p>
    `

})
export class FlightEditComponent {

    private id: string;

    constructor(route: ActivatedRoute) {
        route.params.subscribe((p) => {
            this.id = p['id'];
        })
    }

}