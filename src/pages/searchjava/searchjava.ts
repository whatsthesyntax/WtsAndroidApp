import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Searchcode } from '../../providers/searchcode';
import { SeecodePage } from '../seecode/seecode';
/*
  Generated class for the Searchjava page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-searchjava',
  templateUrl: 'searchjava.html',
  providers: [Searchcode]
})
export class SearchjavaPage {
  public showSearchResult = false;
  public codes = [];
  public code;
  iconsearch = "./assets/iconjava.png";
  iconoeil = "./assets/iconoeil.png";
  constructor(public navCtrl: NavController,
     private codeService: Searchcode) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchjavaPage');
  }
  getCodesResult(searchreq){
    let result = this.codeService.getCodesByLangage("java",searchreq.toLowerCase());
    this.showSearchResult = true;
    result.subscribe((data) => this.codes=data);
  }
  reset(){
    this.showSearchResult = false;
    this.codes = [];
  }
  seeCode(codevalue:string, codeId:number){
    this.reset();
    this.codeService.getCode(codeId).subscribe((data) => {
      this.code = data;
      this.navCtrl.push(SeecodePage, {code:codevalue, langage:this.code.langage.langage});
    });
  }
}
