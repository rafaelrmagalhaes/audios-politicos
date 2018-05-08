import { Component } from '@angular/core';
import { SocialSharing } from '@ionic-native/social-sharing';

@Component({
  selector: 'share',
  templateUrl: 'share.html'
})
export class SharePage {
    constructor(private socialSharing: SocialSharing) {

        this.socialSharing.share('App com os áudios mais marcantes dos nossos queridos políticos.', 'Áudios Políticos').then(() => {
          }).catch((e) => {
            console.log(e);
          });
    }
}
