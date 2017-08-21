import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styleUrls: ['./event-thumbnail.component.css']
})
export class EventThumbnailComponent implements OnInit {

    @Input() event: any;
    //@Output() eventClick= new EventEmitter();

    //someProperty: any = "some Value";

  constructor() { }

  ngOnInit() {
  }

  logFoo() {
      console.log("foo");
  }

  getStartTimeClass() {
      const isEarlyStart = this.event && this.event.time === '8:00 am';
      const isLateStart = this.event && this.event.time === '10:00 am';
      if (isEarlyStart) {
          return { green: isEarlyStart, bold: isEarlyStart };
      } else if (isLateStart) {
          return { orange: isLateStart, bold: isLateStart } ;
      }
      
  }

  //handleClickMe() {
  //    this.eventClick.emit(this.event);
  //}

}
