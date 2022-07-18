import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api/api.service';
import { CommonService } from 'src/app/services/common/common.service';

@Component({
  selector: 'app-collect-payment',
  templateUrl: './collect-payment.page.html',
  styleUrls: ['./collect-payment.page.scss'],
})
export class CollectPaymentPage implements OnInit {
  public weekday = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
  public monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  public search_index: any;
  public doctorInfo : any = [];
  public blooked_slot: any;

  constructor(
    public _router: Router,
    public _api: ApiService,
    public _commonService: CommonService,
    private activatedRoute: ActivatedRoute
  ) {
    this.search_index = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
    if(this._commonService.transaction_id==null || this._commonService.transaction_id==undefined)
    {
      this._router.navigate(["/dashboard/"]);
    }
  }

  ngOnInit() {
    // console.log(this._commonService.searchResults.fulfillments[this.search_index]);

    this._commonService.SOCKET.on('on_init', (data) => {
      setTimeout(() => {
        let start_time = new Date(this._commonService.searchResults.order.message.order.fulfillment.start.time.timestamp);
        let end_time = new Date(this._commonService.searchResults.order.message.order.fulfillment.end.time.timestamp);
        this.blooked_slot = this.weekday[start_time.getDay()]+" "+this.monthNames[start_time.getMonth()]+" "+("0"+start_time.getDate()).slice(-2)+", "+("0"+start_time.getHours()).slice(-2)+":"+("0"+start_time.getMinutes()).slice(-2);
      }, 500);
    });

    setTimeout(() => {
      let start_time = new Date(this._commonService.searchResults.order.message.order.fulfillment.start.time.timestamp);
      let end_time = new Date(this._commonService.searchResults.order.message.order.fulfillment.end.time.timestamp);
      this.blooked_slot = this.weekday[start_time.getDay()]+" "+this.monthNames[start_time.getMonth()]+" "+("0"+start_time.getDate()).slice(-2)+", "+("0"+start_time.getHours()).slice(-2)+":"+("0"+start_time.getMinutes()).slice(-2);
    }, 3000);

    // console.log(this._commonService.searchResults.order);
    // var results = this._commonService.searchResults[this.search_index]
    // console.log(results);

    // this.doctorInfo.push({
    //   service_provider: results.service_provider,
    //   provider_id: results.provider_id,
    //   doctor_name: results.doctor_name,
    //   doctor_id: results.doctor_id,
    //   doctor_gender: (results.doctor_gender).toLowerCase(),
    //   doctor_img: results.doctor_image,
    //   doctor_cred: results.doctor_cred,
    //   doctor_service_type: results.doctor_service_type=="NA"?"":results.doctor_service_type,
    //   doctor_service_category: results.doctor_service_category,
    //   item_id: results.item_id,
    //   quote: results.quote,
    //   start: results.start,
    //   end: results.end
    // });

    // console.log(this.doctorInfo);
  }

  // npx greenlock init --config-dir ./greenlock.d --maintainer-email 'shubham.bhadale@plus91.in'
  // npx greenlock add --subject uhi-eua-socket.medixcel.in --altnames uhi-eua-socket.medixcel.in

  confirm()
  {
    // console.log(this._commonService.searchResults.order.message.order.payment.uri);
    // window.location.href = this._commonService.searchResults.order.message.order.payment.uri;
    // return;
    // console.log(this._commonService.searchResults.order);
    let dataArr = this._commonService.searchResults.order.message.order;
    dataArr["context"] = this._commonService.searchResults.order.context;
    var param = {
      details: dataArr
    }
    // console.log("confirm",param);
    this._commonService.presentLoading();
    this._api.confirm(param).subscribe((res: any) => {
      console.log(res);
      if(res.success && res.body.message.ack.status=="ACK")
      {
        this._router.navigate(["/dashboard/confirm-booking"]);
      }
    }, (err) => {
      if (err) {
        console.error(err);
      }
    });
  }

}
