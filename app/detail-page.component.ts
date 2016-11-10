import {Component, Input, OnChanges, SimpleChange} from '@angular/core';

@Component ({
	selector: 'child-page',
	template: `
        <h3> version {{major}} </h3>
        <h4> Change log: </h4>
        <ul>
            <li *ngFor = "let chnage of chnagedlog">{{chnage}}</li>
        </ul>
	`
})

export class DetailPageComponent implements OnChanges {
	@Input() major: number;
	@Input() minor: number;
	chnagedlog: string[] = [];

	ngOnChanges(changes: {[propKey: string]: SimpleChange}){
		let log : string[] =[];
		for(let propName in changes) {
			let chnagedProp = changes[propName];

			let from  = JSON.stringify(chnagedProp.previousValue);
			let to = JSON.stringify(chnagedProp.currentValue);

			log.push( `${propName} chnaged from ${from} to ${to}`);
		}
		this.chnagedlog.push(log.join(', '));
	}


}