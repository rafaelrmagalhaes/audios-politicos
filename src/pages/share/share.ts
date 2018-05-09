import { Component } from '@angular/core';
import { SocialSharing } from '@ionic-native/social-sharing';

@Component({
  selector: 'share',
  templateUrl: 'share.html'
})
export class SharePage {
    constructor(private socialSharing: SocialSharing) {
      this.shareApp();
    }

    shareApp(){
      this.socialSharing.share('App com os áudios mais marcantes dos nossos queridos políticos.', 'Áudios Políticos', null, 'http://audiospoliticos.com.br').then(() => {
      }).catch((e) => {
        console.log(e);
      });
    }
}