import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: `
    <h2> On chnage check value</h2>
    <button (click) = "newMinor()">New minor version</button>
    <button (click) = "newMajor()">New major version</button>
    <child-page [major] = "major" [minor] = "minor"></child-page>
  `
})
export class AppComponent {
  major: number = 1;
  minor: number = 23;

  newMinor() {
    this.minor++;
  }

  newMajor() {
    this.major++;
    this.minor = 0;
  }
}