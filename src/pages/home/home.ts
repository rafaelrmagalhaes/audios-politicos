import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  people = require('../../assets/audios/audios.json');

  constructor(public navCtrl: NavController) {}

}
