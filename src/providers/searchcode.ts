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
  private userUrlGetCodes = 'http://vps381611.ovh.net:8080/WTSAPI/search';
  private userUrlGetCode = 'http://vps381611.ovh.net:8080/WTSAPI/codes'
  constructor(public http: Http) {
    console.log('Hello Searchcode Provider');
  }
  /*Search for codes*/
  getCodes(searchreq:string){
    let headersearch = new Headers({"Content-Type": "text/plain"});
    return this.http.post(this.userUrlGetCodes, searchreq, {headers: headersearch})
    .map(
      (res) => res.json()
    );
  }

  /*Search for codes by langage*/
  getCodesByLangage(langage:string, searchreq:string){
    let headersearch = new Headers({"Content-Type": "text/plain"});
    return this.http.post(this.userUrlGetCodes, langage+" "+searchreq, {headers: headersearch})
    .map(
      (res) => res.json()
    );
  }

  /*Get code by id*/
getCode(codeId){
  return this.http.get(this.userUrlGetCode+'/'+codeId, {headers: this.headers})
  .map(
    (res) => res.json()
  )
}
}
