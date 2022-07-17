import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardPage } from './dashboard.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'teleconsultation',
    loadChildren: () => import('./teleconsultation/teleconsultation.module').then( m => m.TeleconsultationPageModule)
  },
  {
    path: 'search-results',
    loadChildren: () => import('./search-results/search-results.module').then( m => m.SearchResultsPageModule)
  },
  {
    path: 'book-appointment/:id',
    loadChildren: () => import('./book-appointment/book-appointment.module').then( m => m.BookAppointmentPageModule)
  },
  {
    path: 'collect-payment/:id',
    loadChildren: () => import('./collect-payment/collect-payment.module').then( m => m.CollectPaymentPageModule)
  },
  {
    path: 'confirm-booking',
    loadChildren: () => import('./confirm-booking/confirm-booking.module').then( m => m.ConfirmBookingPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardPageRoutingModule {}
