import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage, AudioListPage } from '../pages/home/home';
import { SendAudioPage } from '../pages/send-audio/send-audio';
import { SharePage } from '../pages/share/share';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StreamingMedia } from '@ionic-native/streaming-media';
import { SocialSharing } from '@ionic-native/social-sharing';
import { AdMobFree } from '@ionic-native/admob-free';
import { Network } from '@ionic-native/network';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AudioListPage,
    SendAudioPage,
    SharePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AudioListPage,
    SendAudioPage,
    SharePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    StreamingMedia,
    SocialSharing,
    AdMobFree,
    Network,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
