import {EventsListComponent } from './events/events-list/events-list.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { CreateEventComponent } from './events/create-event/create-event.component';
import { EventRouteActivatorService } from './events/shared/event-route-activator.service';
import { EventListResolverService} from './events/shared/events-list-resolver.service';
import { Error404Component } from './errors/404.component';
import { Routes } from '@angular/router';

export const appRoutes: Routes = [
    { path: 'events/new', component: CreateEventComponent , canDeactivate: ['canDeactivateCreateEvent']},
    { path: 'events', component: EventsListComponent, resolve: { events: EventListResolverService } },
    { path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivatorService] },
    { path: '404', component: Error404Component },
    { path: '', redirectTo: 'events', pathMatch: 'full' },
    { path: 'user', loadChildren: 'app/user/user.module#UserModule' }
   
]
