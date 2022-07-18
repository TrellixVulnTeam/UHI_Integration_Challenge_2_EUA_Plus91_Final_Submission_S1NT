// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
import { readFileSync } from 'fs';
import {io} from 'socket.io-client';
export const environment = {
  production: false,
  API: 'https://40c0-182-72-250-90.in.ngrok.io/api/v1/',
  // API: 'https://40c0-182-72-250-90.in.ngrok.io:3284/api/v1/',
  SOCKET: io('http://uhi-eua-socket.medixcel.in:3285')
  // SOCKET: io('https://f545-182-72-250-90.in.ngrok.io')
  // io.connect()
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
