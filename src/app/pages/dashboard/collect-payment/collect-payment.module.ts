import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CollectPaymentPageRoutingModule } from './collect-payment-routing.module';

import { CollectPaymentPage } from './collect-payment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CollectPaymentPageRoutingModule
  ],
  declarations: [CollectPaymentPage]
})
export class CollectPaymentPageModule {}
