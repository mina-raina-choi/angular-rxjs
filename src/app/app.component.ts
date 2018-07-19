import { Component } from '@angular/core';
import { Observable } from 'rxjs'
import { map, take } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor() {
    this.getStream.subscribe(value => console.log("Subscriber: " + value));
  }
  
  getStream = Observable.interval(1000)
  .take(3)
  .map(() => Date.now())

}
