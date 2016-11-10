import { Component }      from '@angular/core';
@Component({
  selector: 'my-app',
  template: `
    <h2>Should mankind colonize the Universe?</h2>
    <h3>Agree: {{agreed}}, Disagree: {{disagreed}}</h3>
    <child-page *ngFor="let voter of voters"
      [name]="voter"
      (onVoted)="onVoted($event)">
    </child-page>
  `
})
export class AppComponent {
  agreed = 0;
  disagreed = 0;
  voters = ['Mr. IQ', 'Ms. Universe', 'Bombasto'];
  onVoted(agreed: boolean) {
    agreed ? this.agreed++ : this.disagreed++;
  }
}
