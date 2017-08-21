import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { EventsService } from './events.service';

@Injectable()

export class EventListResolverService implements Resolve<any> {
    constructor(private eventService: EventsService) { }


    //subscribe returns a subscription
    //use map in resolve, return the obs to angular, so ng can watch obs and when it finishes
    resolve() {
        return this.eventService.getEvents().map(events => events);
    }
}
