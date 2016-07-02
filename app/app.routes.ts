import { RouterConfig, provideRouter } from '@angular/router';
import { HomeComponent} from './home/home.component';
import { FlightSearchComponent} from './flight-search/flight-search.component';
import { FlightSearchComponentRf } from './flight-search-rf/flight-search.component';
import { FlightEditComponent} from './flight-edit/flight-edit.component';

export const APP_ROUTES: RouterConfig = [
    {
        path: '',
        component: HomeComponent,
    },
    {
        path: 'flight-search',
        component: FlightSearchComponent
    },
    {
        path: 'flight-search-rf',
        component: FlightSearchComponentRf
    },
    {
        path: 'flight-edit/:id',
        component: FlightEditComponent
    }
];