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
  public langage:string="";
  logowts = "./assets/logo.png";
  constructor(public navCtrl: NavController,
    public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad SeecodePage');
    this.code = this.navParams.get('code');
    this.langage = this.navParams.get('langage').toUpperCase();
  }

}
