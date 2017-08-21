import { Component, OnInit, OnChanges, SimpleChanges} from '@angular/core';
import { AppComponent } from '../app.component';
import { SliderHolderComponent } from '../slider-holder/slider-holder.component';



@Component({
  selector: 'slider-bar',
  templateUrl: './slider-bar.component.html',
  styleUrls: ['./slider-bar.component.css'],
  
})
export class SliderBarComponent implements OnInit, OnChanges {

    ngOnChanges(changes: SimpleChanges): void {
           
        }

    Dates = [new Date().getMilliseconds()];

    toggleMenu() {

        this.slider.toggleMenu();
       
    }


  constructor(private slider : SliderHolderComponent) { }

  ngOnInit() {
      this.Dates.push(new Date().getMilliseconds());
  }

  


  

}
