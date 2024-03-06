import { Injectable } from '@angular/core';
import { SMS } from '@awesome-cordova-plugins/sms'

@Injectable({
  providedIn: 'root'
})
export class CordovaSmsService {

  constructor() { }

  public async sendSMS(phoneNumber: string, message: string) {
    //const hasPermission = await SMS.hasPermission();
    //if (hasPermission) {
      await SMS.send(phoneNumber, message, { replaceLineBreaks: true, android: { intent: 'INTENT' } });
    //}
  }
}
