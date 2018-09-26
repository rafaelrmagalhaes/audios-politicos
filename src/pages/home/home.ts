import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { StreamingMedia, StreamingAudioOptions } from '@ionic-native/streaming-media';
import { SocialSharing } from '@ionic-native/social-sharing';
import { AdMobFree, AdMobFreeBannerConfig } from '@ionic-native/admob-free';

declare var require: any;

const baseUrl = 'http://audiospoliticos.com.br/assets';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  people = require(`../../audios.json`);

  constructor(public navCtrl: NavController, private admobFree: AdMobFree) {
    const bannerConfig: AdMobFreeBannerConfig = {
      id: 'ca-app-pub-6062116325264267/8307310253',
      isTesting: false,
      autoShow: true
     };
     this.admobFree.banner.config(bannerConfig);
     
     this.admobFree.banner.prepare();
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

  constructor(params: NavParams, private streamingMedia: StreamingMedia, private socialSharing: SocialSharing) {
    this.audioList = params.data.audioList;
    this.name = params.data.name;
    this.slug = params.data.slug;
  }

  playAudio(audioFile){
    let options: StreamingAudioOptions = {
      bgColor: '#000000',
      bgImage: `${baseUrl}/imgs/${this.slug}.jpg`
    };

    this.streamingMedia.playAudio(`${baseUrl}/audios/${this.slug}/${audioFile}`, options);
  }

  shareAudio(audioName, audioFile) {
    this.socialSharing.share(audioName, this.name, `${baseUrl}/audios/${this.slug}/${audioFile}`).then(() => {
    }).catch((e) => {
      console.log(e);
    });
  }
}