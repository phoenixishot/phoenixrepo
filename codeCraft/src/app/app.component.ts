import { FormAppComponent } from './form-app/form-app.component';
import { SearchReactiveFormComponent } from './search-reactive-form/search-reactive-form.component';
import { Component } from '@angular/core';

import { trigger, state, style, animate, transition } from '@angular/animations';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  //animations: [trigger('slideInOut', [
  //    state('in', style({
  //        transform: 'translateX(90%)'
  //    })),
  //    state('out', style({
  //        transform: 'translateX(0%)'
  //    })),
  //    transition('in => out', animate('300ms ease-in')),
  //    transition('out => in', animate('100ms ease-in'))
  //])
  //]
})
export class AppComponent {
    menuState: string = 'in';
    //title = 'app';

    //toggleMenu() {
    //    this.menuState = this.menuState == 'out' ? 'in' : 'out';
    //    console.log(this.menuState);
    //}
}
