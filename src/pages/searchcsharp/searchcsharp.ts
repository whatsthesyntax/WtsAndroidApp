import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Searchcsharp page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-searchcsharp',
  templateUrl: 'searchcsharp.html'
})
export class SearchcsharpPage {

  iconsearch = "./assets/iconcsharp.png";
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchcsharpPage');
  }

}
