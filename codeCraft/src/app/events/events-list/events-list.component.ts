import { Component, OnInit } from '@angular/core';
import { EventsService } from '../shared/events.service';
import { ToastrService} from '../../common/toastr.service';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {

    
    eventList: any;

    //handleEventClicked(data) {
    //    let received = JSON.stringify(data);
    //    console.log("received: " + received);
    //}
    constructor(private eventsService: EventsService,
        private toastr: ToastrService,
        private route: ActivatedRoute
    ) { }

  ngOnInit() {

      //this.eventsService.getEvents().subscribe(events => { this.eventList = events});
      this.eventList = this.route.snapshot.data['events'];
  }

  handleClick(eName) {
     this.toastr.success(eName);

  }

}
