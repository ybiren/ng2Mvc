import { Component } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';


@Component({
	selector: 'patient-dtls',
	template: '<div class="col-sm-3" (click)="handleEvent()"><div>{{firstName}}&nbsp;{{lastName}}&nbsp;({{age}} years)</div><div>{{gender}} &nbsp; {{mrn}}</div></div>'
})

export class PatientComponent {
	@Input() firstName: string;
	@Input() lastName: string;
	@Input() mrn: string;
	@Input() age: number;
	@Input() gender: string;


	@Output() click: EventEmitter<string> = new EventEmitter<string>();

  handleEvent() {
		this.click.emit(this.mrn);
  }

	constructor() {
	}



}