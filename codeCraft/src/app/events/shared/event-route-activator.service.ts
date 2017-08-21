import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { EventsService} from './events.service';

@Injectable()
export class EventRouteActivatorService implements CanActivate {

    //  !! means boolean
    constructor(private eventService: EventsService, private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot) {
        const eventExists =  !!this.eventService.getEvent(+route.params['id']);
        if (!eventExists) {
            this.router.navigate(['/404']);
            return eventExists;
        }

    }

    

    



}
