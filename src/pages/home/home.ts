import { Component } from '@angular/core';
import { NavController, NavParams, Platform, AlertController } from 'ionic-angular';
import { NativeAudio } from '@ionic-native/native-audio';

declare var require: any;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  people = require('../../assets/audios/audios.json');

  constructor(public navCtrl: NavController, public plt: Platform, private alertCtrl: AlertController) {}

  ionViewDidLoad() {
    if (this.plt.is('android')) {
      let alert = this.alertCtrl.create({
        title: 'Baixe o nosso app para Android e ouça os áudios offline!',
        message: 'Deseja baixar o app?',
        buttons: [
          {
            text: 'Não',
            role: 'cancel',
            handler: () => {
              console.log('Cancel clicked');
            }
          },
          {
            text: 'Sim',
            handler: () => {
              window.open('https://play.google.com/store/apps/details?id=audios.politicos');
            }
          }
        ]
      });
      alert.present();
    }
  }

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