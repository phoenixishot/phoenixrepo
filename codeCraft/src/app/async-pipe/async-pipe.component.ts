import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs/Rx';


@Component({
  selector: 'app-async-pipe',
  templateUrl: './async-pipe.component.html',
  styleUrls: ['./async-pipe.component.css']
})
export class AsyncPipeComponent implements OnInit {

    observableData: Observable<number>;
  

    constructor() {
        this.observableData = this.getObservable()
    }

  ngOnInit() {
  }

  getObservable() {
      return Observable
          .interval(1000)
          .take(10)
          .map((v) => v * v);
  }

  //subscribeObservable() {
  //    this.subscription = this.getObservable()
  //        .subscribe(v => this.observableData = v);
  //}

  //ngOnDestroy() {
  //    if (this.subscription) {
  //        this.subscription.unsubscribe();

  //    }
  //}

}
