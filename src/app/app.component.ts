import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { SendAudioPage } from '../pages/send-audio/send-audio';
import { SharePage } from '../pages/share/share';

import { Network } from '@ionic-native/network';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, private network: Network) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Áudios', component: HomePage },
      { title: 'Envie seu áudio', component: SendAudioPage },
      { title: 'Compartilhe o App!', component: SharePage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.checkOffline();
      this.listenConnection();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  listenConnection() {
    this.network.onchange().subscribe(() => {
      this.checkOffline();
    });
  }

  checkOffline() {
    if(this.network.type == 'unknown' || this.network.type == 'none') {
      alert('Você precisa ter uma conexão com a internet para usar o app.');
    }
  }
}
