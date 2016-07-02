import {Component,Input, Output, EventEmitter} from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core'

@Component({
    selector: 'flight-card',
    template: require('./flight-card.component.html'),
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FlightCardComponent {

    @Input() item;
    @Input() selectedItem;
    @Output() selectedItemChange = new EventEmitter();

    select() {
        this.selectedItemChange.emit(this.item);
    }
}