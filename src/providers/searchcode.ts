import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import { SearchReq } from '../searchreq';
/*
  Generated class for the Searchcode provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Searchcode {
  /*Atrributs*/
  sreq: SearchReq;
  public headers = new Headers({"Content-Type": "application/json"});
  public options = new RequestOptions({ headers: this.headers });
  /*URLs*/
  private userUrlGetCodes = 'http://localhost:8080/getCodes';
  private userUrlGetCodesByLangage = 'http://localhost:8080/getCodes';
  constructor(public http: Http) {
    console.log('Hello Searchcode Provider');
  }
  /*Search for codes*/
  getCodes(searchreq:string){
    let url = this.userUrlGetCodes+'/'+searchreq;
    let headers = new Headers({"Content-Type": "text/plain"});
    return this.http.get(url, {headers: headers})
    .map(
      (res) => res.json()
    );
  }

  /*Search for codes by langage*/
  getCodesByLangage(langage:string, searchreq:string){
    let url = this.userUrlGetCodesByLangage+'/'+langage+" "+searchreq;
    let headers = new Headers({"Content-Type": "text/plain"});
    return this.http.get(url, {headers: headers})
    .map(
      (res) => res.json()
    );
  }
}
