import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
  }

}
