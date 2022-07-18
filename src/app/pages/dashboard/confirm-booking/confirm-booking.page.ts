import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { ApiService } from 'src/app/services/api/api.service';
import { CommonService } from 'src/app/services/common/common.service';

@Component({
  selector: 'app-confirm-booking',
  templateUrl: './confirm-booking.page.html',
  styleUrls: ['./confirm-booking.page.scss'],
})
export class ConfirmBookingPage implements OnInit {
  
  constructor(
    public _router: Router,
    public _api: ApiService,
    public _commonService: CommonService,
    private activatedRoute: ActivatedRoute,
    public _iab: InAppBrowser
  ) {
    if(this._commonService.transaction_id==null || this._commonService.transaction_id==undefined)
    {
      this._router.navigate(["/dashboard/"]);
    }
  }
  
  ngOnInit() {
    setTimeout(() => {
      console.log(this._commonService.searchResults.confirm);
    }, 1000);
  }
  
  openBrowser(link: any){
    console.log(link);
    
    this._iab.create(link);
  }
}