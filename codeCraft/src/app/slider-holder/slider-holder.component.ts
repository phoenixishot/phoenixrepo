import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'slider-holder',
  templateUrl: './slider-holder.component.html',
  styleUrls: ['./slider-holder.component.css'],
    animations: [trigger('slideInOut', [
        state('in', style({
            transform: 'translateX(0%)'
        })),
        state('out', style({
            transform: 'translateX(-10%)'
        })),
        transition('in => out', animate('300ms ease-in')),
        transition('out => in', animate('100ms ease-in'))
    ])
    ]
})
 
export class SliderHolderComponent implements OnInit {

    menuState = 'in';

  
  constructor() { }

  ngOnInit() {
  }

  toggleMenu() {
      this.menuState = this.menuState == 'out' ? 'in' : 'out';
      console.log(this.menuState);
  }
 
}
