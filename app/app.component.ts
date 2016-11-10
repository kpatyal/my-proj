import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: `
    <h2>Master controls {{names.length}} names</h2>
    <detail-page *ngFor="let name of names"
      [name]="name">
    </detail-page>
  `
})
export class AppComponent {
  // Displays 'Mr. IQ', '<no name set>', 'Bombasto'
  names = ['Mr. IQ', '   ', '  Bombasto  '];
}