import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CollectPaymentPage } from './collect-payment.page';

const routes: Routes = [
  {
    path: '',
    component: CollectPaymentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CollectPaymentPageRoutingModule {}
