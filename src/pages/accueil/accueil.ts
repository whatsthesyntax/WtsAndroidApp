import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { JavaPage } from '../java/java';
import { PhpPage } from '../php/php';
import { CsharpPage } from '../csharp/csharp';
/*
  Generated class for the Accueil page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-accueil',
  templateUrl: 'accueil.html'
})
export class AccueilPage {


  logowts = "./assets/logo.png";
  iconaccueil = "./assets/iconaccueil.png";
  iconjava = "./assets/iconjava.png";
  iconcsharp = "./assets/iconcsharp.png";
  iconcmenu = "./assets/iconmenu.png";
  iconphp = "./assets/iconphp.png";
  visible: boolean = false;
  /*pages*/

  java = JavaPage;
  php = PhpPage;
  csharp = CsharpPage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad HeaderPage');
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
