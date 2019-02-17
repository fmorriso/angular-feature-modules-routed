import {Component, OnInit, VERSION} from '@angular/core';

@Component({
	selector: 'app-about',
	templateUrl: './about.component.html',
	styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
	angularVersion: string;

	constructor() {
		this.angularVersion = VERSION.full;
	}

	ngOnInit() {
	}

}
