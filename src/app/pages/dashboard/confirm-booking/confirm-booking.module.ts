import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfirmBookingPageRoutingModule } from './confirm-booking-routing.module';

import { ConfirmBookingPage } from './confirm-booking.page';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfirmBookingPageRoutingModule
  ],
  declarations: [ConfirmBookingPage],
  schemas: [],
  providers:[InAppBrowser]
})
export class ConfirmBookingPageModule {}
