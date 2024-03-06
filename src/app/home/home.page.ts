import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/angular/standalone';
import { CordovaSmsService } from '../cordova-sms.service';
import { CapacitorSmsService } from '../capacitor-sms.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonButton, IonHeader, IonToolbar, IonTitle, IonContent],
})
export class HomePage {
  constructor(private cordovaPlugin: CordovaSmsService, private capacitorPlugin: CapacitorSmsService) { }

  async sendUsingCordovaPlugin() {
    await this.cordovaPlugin.sendSMS('702 555 3890', 'Hi there!');
  }

  async sendUsingCapacitorPlugin() {
    await this.capacitorPlugin.sendSMS('702 555 3890', 'Hi there!');
  }
}
