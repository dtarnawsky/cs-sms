# SMS in a Capacitor app

This is a comparison of the Cordova plugin [cordova-sms-plugin](https://www.npmjs.com/package/cordova-sms-plugin) and the Capacitor plugin [@byteowls/capacitor-sms](https://www.npmjs.com/package/@byteowls/capacitor-sms).

## cordova-sms-plugin

You can add `@awesome-cordova-plugins/sms` but in calling `hasPermission` it returns the error:
`Error: Plugin Sms does not respond to method call has_permission:. Ensure plugin method exists and uses @objc in its declaration`

The typescript wrapper is missing the `requestSMSPermission` method.

Calling `send` works without permissions
```typescript
import { SMS } from '@awesome-cordova-plugins/sms'
...
await SMS.send(phoneNumber, message, { replaceLineBreaks: true, android: { intent: 'INTENT' } });
```

Weekly downloads are at ~2900 so it is more popular that then Capacitor alternative.

## @byteowls/capacitor-sms


```typescript
import { SmsManager } from "@byteowls/capacitor-sms";
...
await SmsManager.send({ numbers: [phoneNumber], text: message });
```

Weekly downloads are at ~1000 so it is slightly less popular, but the plugin does not require any additional Typescript wrappers.


