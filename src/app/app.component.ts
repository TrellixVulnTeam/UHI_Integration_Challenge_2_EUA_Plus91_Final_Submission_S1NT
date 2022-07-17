import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SplashScreen } from '@capacitor/splash-screen'
import { CommonService } from './services/common/common.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  public appPages = [
    { title: 'Dashboard', url: '/dashboard/home', icon: './assets/home-blue.png' },
    { title: 'Teleconsultation', url: '/dashboard/teleconsultation', icon: './assets/teleconsultation-blue.png' },
    { title: 'Physical Consultation', url: '/dashboard/physical-consultation', icon: './assets/doctor-blue.png' },
    { title: 'Ambulance', url: '/dashboard/ambulance', icon: './assets/ambulance-blue.png' },
    { title: 'Lab Test', url: '/dashboard/lab-test', icon: './assets/lab-report-blue.png' },
    { title: 'Blood Bank', url: '/dashboard/blood-bank', icon: './assets/blood-bank-blue.png' },
    { title: 'Logout', url: '/login', icon: './assets/blood-bank-blue.png' }
  ];

  constructor(
    public _router: Router,
    public _commonService: CommonService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    /* To make sure we provide the fastest app loading experience
       for our users, hide the splash screen automatically
       when the app is ready to be used:

        https://capacitor.ionicframework.com/docs/apis/splash-screen#hiding-the-splash-screen
    */
    SplashScreen.hide();
  }
}
