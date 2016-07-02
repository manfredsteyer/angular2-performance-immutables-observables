import { Component } from '@angular/core'
import { ROUTER_DIRECTIVES } from '@angular/router'

@Component({
    selector: 'flight-app',
    template: require('./app.component.html'),
    directives: [ROUTER_DIRECTIVES]
})
export class AppComponent {
}