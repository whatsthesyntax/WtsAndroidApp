import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Searcharea page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-searcharea',
  templateUrl: 'searcharea.html'
})
export class SearchareaPage {

  public showSearchResult = false;
  public codes = [];
  iconsearch = "./assets/iconsearch.png";
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchareaPage');
  }

}
