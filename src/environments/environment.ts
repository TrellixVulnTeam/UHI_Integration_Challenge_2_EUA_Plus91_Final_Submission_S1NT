// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
import * as io from 'socket.io-client';
export const environment = {
  production: false,
  API: 'https://7aa3-112-133-244-202.in.ngrok.io/api/v1/',
  // API: 'http://uhi-eua-server.medixcel.in:3284/api/v1/',
  SOCKET: io.connect('http://uhi-eua-socket.medixcel.in:3285')
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
