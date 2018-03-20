"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var httpSrv_1 = require("./httpSrv");
var patient_1 = require("./patient");
var core_2 = require("@angular/core");
var core_3 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent(httpSrv, componentFactoryResolver, viewContainerRef) {
        this.httpSrv = httpSrv;
        this.componentFactoryResolver = componentFactoryResolver;
        this.viewContainerRef = viewContainerRef;
        this.title = 'ASP.NET MVC 5 with Angular 2';
        this.skills = ['MVC 5', 'Angular 2', 'TypeScript', 'Visual Studio 2015'];
        this.myskills = this.skills[2];
        this.tipContent = "This is the tooltip";
    }
    AppComponent.prototype.calculateAge = function (birthday) {
        var ageDifMs = Date.now() - birthday.getTime();
        var ageDate = new Date(ageDifMs); // miliseconds from epoch
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    };
    AppComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.httpSrv.get1().then(function (data) {
            data = JSON.parse(data);
            alert(data.patientinfo.length);
            for (var i = 0; i < data.patientinfo.length; i++) {
                var patientinfo = data.patientinfo[i];
                var factory = _this.componentFactoryResolver.resolveComponentFactory(patient_1.PatientComponent);
                var ref = _this.dynamicInsert.createComponent(factory);
                ref.changeDetectorRef.detectChanges();
                var instance = ref.instance;
                instance.firstName = patientinfo.firstName;
                instance.lastName = patientinfo.lastName;
                instance.mrn = patientinfo.mrn;
                instance.gender = patientinfo.gender;
                instance.age = _this.calculateAge(new Date(patientinfo.dateOfBirth));
                instance.click.subscribe(function (evt) { return alert(evt); });
            }
        });
    };
    return AppComponent;
}());
__decorate([
    core_3.ViewChild('dynamicInsert', { read: core_3.ViewContainerRef }),
    __metadata("design:type", Object)
], AppComponent.prototype, "dynamicInsert", void 0);
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        providers: [httpSrv_1.Httpsrv],
        template: "<div class=\"content\" #dynamicInsert></div>"
    }),
    __metadata("design:paramtypes", [httpSrv_1.Httpsrv, core_2.ComponentFactoryResolver, core_3.ViewContainerRef])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.js.map