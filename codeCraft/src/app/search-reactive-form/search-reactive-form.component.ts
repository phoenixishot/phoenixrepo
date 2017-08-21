import { Component, OnInit } from '@angular/core';
import { FormControl } from "@angular/forms";

@Component({
  selector: 'app-search-reactive-form',
  templateUrl: './search-reactive-form.component.html',
  styleUrls: ['./search-reactive-form.component.css']
})
export class SearchReactiveFormComponent implements OnInit {

    searchField: FormControl;
    searches: string[] = [];
  constructor() { }

  ngOnInit() {

      this.searchField = new FormControl();
      this.searchField.valueChanges
          .debounceTime(400)
          .distinctUntilChanged()
          .subscribe(term => {
              this.searches.push(term);
          })
  }

}
