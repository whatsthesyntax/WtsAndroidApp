import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  logowts = "./assets/logo.png";
  public name;
  constructor(public navCtrl: NavController) {
    this.name = "Andrew";
  }

}
