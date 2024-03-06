import { Injectable } from '@angular/core';
import { SmsManager } from "@byteowls/capacitor-sms";


@Injectable({
  providedIn: 'root'
})
export class CapacitorSmsService {

  public async sendSMS(phoneNumber: string, message: string) {
    await SmsManager.send({
      numbers: [phoneNumber],
      text: message
    });
  }
}
