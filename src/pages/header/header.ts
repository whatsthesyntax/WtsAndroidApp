import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { JavaPage } from '../java/java';
import { PhpPage } from '../php/php';
import { CsharpPage } from '../csharp/csharp';
import { AccueilPage } from '../accueil/accueil';
/*
  Generated class for the Header page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-header',
  templateUrl: 'header.html'
})
export class HeaderPage {

  logowts = "./assets/logo.png";
  iconaccueil = "./assets/iconaccueil.png";
  iconjava = "./assets/iconjava.png";
  iconcsharp = "./assets/iconcsharp.png";
  iconcmenu = "./assets/iconmenu.png";
  iconphp = "./assets/iconphp.png";
  visible: boolean = false;
  /*pages*/

  accueil = AccueilPage;
  java = JavaPage;
  php = PhpPage;
  csharp = CsharpPage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad HeaderPage');
  }

  accueilf(){
    this.navCtrl.push(this.accueil);
  }

  javaf(){
    this.navCtrl.push(this.java);
  }

  phpf(){
    this.navCtrl.push(this.php);
  }

  csharpf(){
    this.navCtrl.push(this.csharp);
  }
}
