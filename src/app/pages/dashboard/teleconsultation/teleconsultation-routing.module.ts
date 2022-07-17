import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeleconsultationPage } from './teleconsultation.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'search'
    // component: TeleconsultationPage
  },
  {
    path: 'search-result',
    loadChildren: () => import('./search-result/search-result.module').then( m => m.SearchResultPageModule)
  },
  {
    path: 'doctor-details',
    loadChildren: () => import('./doctor-details/doctor-details.module').then( m => m.DoctorDetailsPageModule)
  },
  {
    path: 'appointment-details',
    loadChildren: () => import('./appointment-details/appointment-details.module').then( m => m.AppointmentDetailsPageModule)
  },
  {
    path: 'appointment-confirmation',
    loadChildren: () => import('./appointment-confirmation/appointment-confirmation.module').then( m => m.AppointmentConfirmationPageModule)
  },
  {
    path: 'search',
    loadChildren: () => import('./search/search.module').then( m => m.SearchPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeleconsultationPageRoutingModule {}
