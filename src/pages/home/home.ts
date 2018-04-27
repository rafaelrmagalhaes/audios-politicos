import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  people = require('../../assets/audios/audios.json');

  constructor(public navCtrl: NavController) {}

  openAudioList(audioList, name, slug) {
    this.navCtrl.push(AudioListPage, { audioList, name, slug });
  }
}

@Component({
  selector: 'audio-list',
  templateUrl: 'audio-list.html',
})
export class AudioListPage {
  audioList;
  name;
  slug;

  constructor(params: NavParams) {
    this.audioList = params.data.audioList;
    this.name = params.data.name;
    this.slug = params.data.slug;
  } 
}