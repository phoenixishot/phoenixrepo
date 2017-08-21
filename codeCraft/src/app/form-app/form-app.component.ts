import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import 'rxjs/Rx';

@Component({
  selector: 'app-form-app',
  templateUrl: './form-app.component.html',
  styleUrls: ['./form-app.component.css']
})
export class FormAppComponent implements OnInit {

    form: FormGroup;
    comment = new FormControl('', Validators.required);
    name = new FormControl('', Validators.required);
    email = new FormControl('', [Validators.required, Validators.pattern("^[a-zA-Z0-9._%+-]+@(?:[a-zA-Z0-9-]+\.)+.[a-zA-Z]{2,}$")]);

    constructor(fb: FormBuilder) {
        this.form = fb.group({
            "comment": this.comment,
            "name": this.name,
            "email": this.email
        });

        this.form.valueChanges
            .filter(data => this.form.valid)
            .map(data => {
            
                data.comment = data.comment.replace(/<(?:.|\n)*?>/gm, '');
                return data
            }) 
            .map(data => {
                data.lastUpdateTS = new Date().getUTCFullYear() + ' ' + (new Date().getUTCMonth()+1)
                    + ' ' + new Date().getUTCDate() + ', ' + new Date().getUTCHours();
                return data
            })
            .subscribe(data => console.log(JSON.stringify(data)));

    }

  ngOnInit() {
  }

  onSubmit() {
      console.log(this.form.value);

  }
}
