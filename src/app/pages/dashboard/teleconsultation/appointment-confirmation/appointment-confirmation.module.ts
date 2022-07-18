import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AppointmentConfirmationPageRoutingModule } from './appointment-confirmation-routing.module';

import { AppointmentConfirmationPage } from './appointment-confirmation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AppointmentConfirmationPageRoutingModule
  ],
  declarations: [AppointmentConfirmationPage]
})
export class AppointmentConfirmationPageModule {}
