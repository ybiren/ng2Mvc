import {Injectable} from '@angular/core';
import {Http, Headers, Response, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Rx'

@Injectable()
export class Httpsrv {

	constructor(private http: Http) { }

	get1() {
		alert("hello from service8");

		let url = "/Home/Try1";
		let myHeaders = new Headers();
    myHeaders.append('DBMotions', '1234');
		let options = new RequestOptions({ headers: myHeaders });
		return this.http.get(url, options).toPromise().then(this.extractData).catch(this.handleErrorPromise);
	}

  private extractData(res: Response | any) {
	 let body = res._body;
	 return body;
	}

	private handleErrorPromise(error: Response | any) {
		console.log(error);
		alert(error.status);
		console.error(error.message || error);
		return Observable.throw(error.message || error);
	}

}