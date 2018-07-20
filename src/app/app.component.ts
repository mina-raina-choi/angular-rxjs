import { Component } from '@angular/core';
import { Observable } from 'rxjs'
import { map, take, filter } from 'rxjs/operators';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  form: FormGroup;
  comment = new FormControl("", Validators.required);
  name = new FormControl("", Validators.required);
  email = new FormControl("", [
    Validators.required,
    Validators.pattern("[^ @]*@[^ @]*")
  ]);


  constructor(fb: FormBuilder) {
    // this.getStream.subscribe(value => console.log("Subscriber: " + value));
    this.form = fb.group({
      "comment": this.comment,
      "name": this.name,
      "email": this.email
    });

    // using observables
    this.form.valueChanges
      .filter(data => this.form.valid)
      .map(data => {
        data.comment = data.comment.replace(/<(?:.|\n)*?>/gm, '');
        return data
      })  
      .map(data => {
        data.lastUpdateTS = new Date();
        return data
      })
      .subscribe( data => console.log(JSON.stringify(data)))

    //not using observables
    // this.form.valueChanges
    //   .subscribe(data => {
    //     if (this.form.valid) {
    //       data.comment = data.comment.replace(/<(?:.|\n)*?>/gm, '');
    //       data.lastUpdateTS = new Date();
    //       console.log(JSON.stringify(data))
    //     }
    //   })

  }

  onSubmit() {
    console.log("Form submitted!")
  }

  // getStream = Observable.interval(1000)
  // .take(3)
  // .map(() => Date.now())

}
