import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Searchcode } from '../../providers/searchcode';
import { SeecodePage } from '../seecode/seecode';
/*
  Generated class for the Searchcsharp page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-searchcsharp',
  templateUrl: 'searchcsharp.html',
  providers: [Searchcode]
})
export class SearchcsharpPage {
  public showSearchResult = false;
  public codes = [];
  public code;
  iconsearch = "./assets/iconcsharp.png";
  iconoeil = "./assets/iconoeil.png";
  constructor(public navCtrl: NavController,
     private codeService: Searchcode) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchcsharpPage');
  }
  getCodesResult(searchreq){
    let result = this.codeService.getCodesByLangage("csharp",searchreq.toLowerCase());
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
