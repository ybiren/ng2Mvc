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
var http_1 = require("@angular/http");
var Rx_1 = require("rxjs/Rx");
var Httpsrv = (function () {
    function Httpsrv(http) {
        this.http = http;
    }
    Httpsrv.prototype.get1 = function () {
        alert("hello from service8");
        var url = "/Home/Try1";
        var myHeaders = new http_1.Headers();
        myHeaders.append('DBMotions', '1234');
        var options = new http_1.RequestOptions({ headers: myHeaders });
        return this.http.get(url, options).toPromise().then(this.extractData).catch(this.handleErrorPromise);
    };
    Httpsrv.prototype.extractData = function (res) {
        var body = res._body;
        return body;
    };
    Httpsrv.prototype.handleErrorPromise = function (error) {
        console.log(error);
        alert(error.status);
        console.error(error.message || error);
        return Rx_1.Observable.throw(error.message || error);
    };
    return Httpsrv;
}());
Httpsrv = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], Httpsrv);
exports.Httpsrv = Httpsrv;
//# sourceMappingURL=httpSrv.js.map