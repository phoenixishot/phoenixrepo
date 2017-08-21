import { Component, OnInit } from '@angular/core';
import { EventsService } from '../shared/events.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {
    event: any;

    constructor(private eventService: EventsService, private route: ActivatedRoute ) { }

    ngOnInit() {
        ///.snapshot
        this.event = this.eventService.getEvent(+this.route.snapshot.params['id']);

  }

}
