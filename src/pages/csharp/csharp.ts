import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Csharp page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-csharp',
  templateUrl: 'csharp.html'
})
export class CsharpPage {
  logowts = "./assets/logo.png";
  iconcsharp = "./assets/iconcsharp.png";
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad CsharpPage');
  }

}
