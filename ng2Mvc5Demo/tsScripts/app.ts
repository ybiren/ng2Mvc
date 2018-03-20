import { Component } from '@angular/core';
import {Httpsrv} from "./httpSrv";
import {PatientComponent} from "./patient";
import { ComponentFactoryResolver } from '@angular/core';
import { ViewContainerRef, ViewChild } from '@angular/core';


@Component({
    selector: 'my-app',
		providers: [Httpsrv],
		template: `<div class="content" #dynamicInsert></div>`
})
export class AppComponent {
    title = 'ASP.NET MVC 5 with Angular 2';
    skills = ['MVC 5', 'Angular 2', 'TypeScript', 'Visual Studio 2015'];
    myskills = this.skills[2];
		tipContent = "This is the tooltip";

		@ViewChild('dynamicInsert', { read: ViewContainerRef }) dynamicInsert;
		constructor(public httpSrv: Httpsrv, private componentFactoryResolver: ComponentFactoryResolver, private viewContainerRef: ViewContainerRef) {
	
		}

	   
	   calculateAge(birthday) { // birthday is a date
			var ageDifMs = Date.now() - birthday.getTime();
			var ageDate = new Date(ageDifMs); // miliseconds from epoch
			return Math.abs(ageDate.getUTCFullYear() - 1970);
		}
    

	   ngAfterViewInit() {

			 this.httpSrv.get1().then((data) => {
				 data = JSON.parse(data);
				 alert(data.patientinfo.length);
					for (let i = 0; i < data.patientinfo.length; i++) {
						let patientinfo = data.patientinfo[i];
						const factory = this.componentFactoryResolver.resolveComponentFactory(PatientComponent);
						const ref = this.dynamicInsert.createComponent(factory);
						ref.changeDetectorRef.detectChanges();
						let instance: PatientComponent = ref.instance as PatientComponent;
						instance.firstName = patientinfo.firstName;
						instance.lastName = patientinfo.lastName;
						instance.mrn = patientinfo.mrn;
						instance.gender = patientinfo.gender;
						instance.age = this.calculateAge(new Date(patientinfo.dateOfBirth));
						instance.click.subscribe(evt => alert(evt));
					}

			 });
		 
		 }


}