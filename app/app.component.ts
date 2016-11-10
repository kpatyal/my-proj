import { Component }                from '@angular/core';
import { DetailPageComponent }  from './detail-page.component';
@Component({
  selector: 'my-app',
  template: `
  <h3>Countdown to Liftoff (via local variable)</h3>
  <button (click)="timer.start()">Start</button>
  <button (click)="timer.stop()">Stop</button>
  <div class="seconds">{{timer.seconds}}</div>
  <child-page #timer></child-page>
  `
})
export class AppComponent { }
