import { Component, AfterViewInit, ViewChild}  from '@angular/core';
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
export class AppComponent {
@ViewChild(DetailPageComponent)
  private timerComponent: DetailPageComponent;
  seconds() { return 0; }
  ngAfterViewInit() {
    // Redefine `seconds()` to get from the `CountdownTimerComponent.seconds` ...
    // but wait a tick first to avoid one-time devMode
    // unidirectional-data-flow-violation error
    setTimeout(() => this.seconds = () => this.timerComponent.seconds, 0);
  }
  start() { this.timerComponent.start(); }
  stop() { this.timerComponent.stop(); }

}
