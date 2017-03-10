import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';/*
  Generated class for the Seecode page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-seecode',
  templateUrl: 'seecode.html'
})
export class SeecodePage {

  public code:string="";
  public codetoshow:string="";
  public langage:string="";
  logowts = "./assets/logo.png";
  constructor(public navCtrl: NavController,
    public navParams: NavParams) {}

  ionViewDidLoad() {

    console.log('ionViewDidLoad SeecodePage');
    this.code = this.navParams.get('code');
    this.langage = this.navParams.get('langage').toUpperCase();
    for (let c of this.code){
        if (c === '\n'){
            this.codetoshow += "<br>";
        }else{
            this.codetoshow += c;
        }
    }
  }

}
