import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { NativeAudio } from '@ionic-native/native-audio';

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
  audiosPlayed = [];

  constructor(params: NavParams, private nativeAudio: NativeAudio) {
    this.audioList = params.data.audioList;
    this.name = params.data.name;
    this.slug = params.data.slug;
  }

  ionViewWillLeave() {
    this.destroyAudios();
  }

  onSuccessPreloading = (name) => {
    this.nativeAudio.play(name, () => this.audiosPlayed = []);
  }

  onError = (error) => {
    console.log('erro: ', error);
  }

  playAudio(name, audio){
    this.destroyAudios();
    this.audiosPlayed.push(name);
    this.nativeAudio.preloadSimple(name, `assets/audios/${this.slug}/${audio}`).then(() => this.onSuccessPreloading(name), this.onError);
  }

  destroyAudios() {
    if(this.audiosPlayed.length > 0){
      this.nativeAudio.stop(this.audiosPlayed[0]);
    }

    this.audiosPlayed = [];
  }
}