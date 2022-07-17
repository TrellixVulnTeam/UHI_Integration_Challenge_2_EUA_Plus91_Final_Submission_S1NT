import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api/api.service';
import { CommonService } from 'src/app/services/common/common.service';

@Component({
  selector: 'app-book-appointment',
  templateUrl: './book-appointment.page.html',
  styleUrls: ['./book-appointment.page.scss'],
})
export class BookAppointmentPage implements OnInit {

  public search_index: any;
  public searchResults: any;
  public doctorInfo : any = [];
  public availableTimeSlots : any = [];

  public slot_date_option : any;
  public monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  constructor(
    public _router: Router,
    public _api: ApiService,
    public _commonService: CommonService,
    private activatedRoute: ActivatedRoute
  ) {
    var date = new Date();
    this.slot_date_option = this.monthNames[date.getMonth()]+" "+date.getDate();
    this.search_index = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
    console.log(this.search_index);
    
    if(this._commonService.transaction_id==null || this._commonService.transaction_id==undefined)
    {
      this._router.navigate(["/dashboard/search-results"]);
    }
  }

  ngOnInit() {
    this.sortDataFromArray();
    // this.get_onSearchData();
    // this.get_onSelectData();

    // var x = 15; //minutes interval
    // var times = []; // time array
    // var tt = 0; // start time
    
    // //loop to increment the time and push results in array
    // for (var i=0;tt<2*60; i++) {
    //   var hh = Math.floor(tt/60);
    //   console.log("hh",hh);
    //   var mm = (tt%60);
    //   console.log("mm",mm);
    //   times[i] = ("0" + (hh)).slice(-2) + ':' + ("0" + mm).slice(-2);
    //   tt = tt + x;
    // }
    
    // console.log(times);

    // this.sortTimeSLots(16,30,18,0);
  }

  sortTimeSLots(start_hh,start_mm,end_hh,end_mm)
  {
    var x = 15; //minutes interval
    var times = []; // time array
    var tt = start_mm; // start time
    
    //loop to increment the time and push results in array
    for (var i=0;tt<24*60; i++) {
      var hh = Math.floor(tt/60);
      var mm = (tt%60);
      if(hh>=start_hh && hh<=end_hh)
      {
        if(hh==start_hh && mm>=start_mm)
        {
          // console.log(hh,mm)
          // console.log("hh",hh,start_hh);
          // console.log("mm",mm,start_mm);
          // mm = (mm+x>=60)?0:mm+x;
          // times[i] = [("0" + (hh)).slice(-2) + ':' + ("0" + mm).slice(-2),("0" + (hh)).slice(-2) + ':' + ("0" + mm).slice(-2)];
          var end_min = mm+x;
            var end_hr = hh;
            if(end_min>=60)
            {
              end_hr+=1;
              end_min = 0;
            }
            times[i] = [("0" + (hh)).slice(-2) + ':' + ("0" + mm).slice(-2),("0" + (end_hr)).slice(-2) + ':' + ("0" + end_min).slice(-2)];
        }
        else if(hh>start_hh)
        {
          if(hh==end_hh && mm<end_mm)
          {
            // console.log( "3",hh,mm);
            // console.log("hh",hh,start_hh);
            // console.log("mm",mm,start_mm);
            // mm = (mm+x>=60)?0:mm+x;
            var end_min = mm+x;
            var end_hr = hh;
            if(end_min>=60)
            {
              end_hr+=1;
              end_min = 0;
            }
            times[i] = [("0" + (hh)).slice(-2) + ':' + ("0" + mm).slice(-2),("0" + (end_hr)).slice(-2) + ':' + ("0" + end_min).slice(-2)];
          }
          else if(hh<end_hh)
          {
            // console.log( "2",hh,mm);
            // console.log("hh",hh,start_hh);
            // console.log("mm",mm,start_mm);
            // mm = (mm+x>=60)?0:mm+x;
            // times[i] = [("0" + (hh)).slice(-2) + ':' + ("0" + mm).slice(-2),("0" + (hh)).slice(-2) + ':' + ("0" + mm).slice(-2)];
            var end_min = mm+x;
            var end_hr = hh;
            if(end_min>=60)
            {
              end_hr+=1;
              end_min = 0;
            }
            times[i] = [("0" + (hh)).slice(-2) + ':' + ("0" + mm).slice(-2),("0" + (end_hr)).slice(-2) + ':' + ("0" + end_min).slice(-2)];
          }
        }
        // times[i] = ("0" + (hh)).slice(-2) + ':' + ("0" + mm).slice(-2);
        // this.availableTimeSlots[i] = ("0" + (hh)).slice(-2) + ':' + ("0" + mm).slice(-2);
      }
      tt = tt + x;
    }

    for(var k in times)
    {      
      this.availableTimeSlots.push(times[k]);
    }
    
    // console.log(this.availableTimeSlots);
    // return times;
  }

  get_onSearchData()
  {
    let param = {
      "transaction_id": this._commonService.transaction_id
    }
    // console.log("get_onSearchData",param);
    this._api.get_onSearchData(param).subscribe((res: any) => {
      // console.log("get_onSearchData res");
      // console.log(res);
      this.searchResults = [];
      res.data.forEach(data => {
        if(data.hasOwnProperty("request_body"))
        {
          var results = JSON.parse(data.request_body);
          console.log(results);
          if(results.status_code==200 && results.hasOwnProperty("context") && results.hasOwnProperty("message") && results.message.hasOwnProperty("catalog") && results.message.catalog.hasOwnProperty("providers") && (results.message.catalog.providers).length>0)
          {
            (results.message.catalog.providers).forEach(provider => {
              provider.fulfillments.forEach(fulfillment => {
                var isDoctorAlreadyAdded = false;
                for(var i=0; i<(this.searchResults).length;i++)
                {
                  if(this.searchResults[i].doctor_id == fulfillment.person.id)
                  {
                    isDoctorAlreadyAdded = true;
                    break;
                  }
                };
                if(!isDoctorAlreadyAdded)
                {
                  var expression = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
                  var regex = new RegExp(expression);
                  if(!fulfillment.person.image.match(regex)) {
                    fulfillment.person.image = "";
                  }
                  this.searchResults.push({
                    service_provider: results.message.catalog.descriptor.name,
                    provider_id: provider.id,
                    hospital_name: provider.descriptor.name,
                    doctor_name: fulfillment.person.name,
                    doctor_id: fulfillment.person.id,
                    doctor_gender: (fulfillment.person.gender).toLowerCase(),
                    doctor_img: fulfillment.person.image,
                    doctor_cred: fulfillment.person.cred,
                    doctor_service_type: fulfillment.type=="NA"?"":fulfillment.type,
                    doctor_service_category: "",
                    item_id: null,
                    start_time: fulfillment.start,
                    end_time: fulfillment.end
                  });
                }
              });

              provider.items.forEach(item => {
                this.searchResults.forEach(doctor => {
                  if(doctor.doctor_id==item.fulfillment_id)
                  {
                    provider.categories.forEach(category => {
                      if(category.id==item.category_id)
                      {
                        doctor.doctor_service_category = category.descriptor.name=="NA"?"":category.descriptor.name;
                        doctor.item_id = item.id;
                      }
                    });
                  }
                });

              });
            });
          }
        }
      });
      // console.log(this.searchResults);
    }, (err) => {
      if (err) {
        console.error(err);
      }
    })
  }

  get_onSelectData()
  {
    let param = {
      "transaction_id": this._commonService.transaction_id
    }
    this._api.get_onSelectData(param).subscribe((res: any) => {
      // console.log(res);
      res.data.forEach(data => {
        if(data.hasOwnProperty("request_body"))
        {
          var results = JSON.parse(data.request_body);
          // console.log(results);

          this.doctorInfo = [];
          if(results.status_code==200 && results.hasOwnProperty("context") && results.hasOwnProperty("message") && results.message.hasOwnProperty("order") && results.message.order.hasOwnProperty("provider"))
          {
            // console.log("------------->1");
            
            // (results.message.order.provider).forEach(providerData => {
            // console.log("------------->2");
            results.message.order.fulfillment.forEach(fulfillmentData => {
              console.log("------------->3");

              var expression = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
              var regex = new RegExp(expression);
              // if(fulfillmentData.person.image!=null && !fulfillmentData.person.image.match(regex)) {
              //   fulfillmentData.person.image = "";
              // }

              if(fulfillmentData.agent.image!=null && !fulfillmentData.agent.image.match(regex)) {
                fulfillmentData.agent.image = "";
              }

              this.doctorInfo.push({
                service_provider: results.message.order.provider.descriptor.name,
                // provider_id: providerData,
                // hospital_name: providerData, //.descriptor.name,
                doctor_name: fulfillmentData.agent.name,
                doctor_id: fulfillmentData.agent.id,
                doctor_gender: (fulfillmentData.agent.gender).toLowerCase(),
                doctor_img: fulfillmentData.agent.image,
                doctor_cred: fulfillmentData.agent.cred,
                doctor_service_type: fulfillmentData.type=="NA"?"":fulfillmentData.type,
                doctor_service_category: "",
                item_id: null,
                quote: null
              });
            });

            results.message.order.items.forEach(item => {
              this.doctorInfo.forEach(doctor => {
                if(doctor.doctor_id==item.fulfillment_id)
                {
                  doctor.item_id = item.id
                  // results.message.order.categories.forEach(category => {
                  //   if(category.id==item.category_id)
                  //   {
                  //     doctor.doctor_service_category = category.descriptor.name=="NA"?"":category.descriptor.name;
                  //     doctor.item_id = item.id;
                  //   }
                  // });
                }
              });
            });

            this.doctorInfo[0].quote=results.message.order.quote;
            
            this.searchResults.forEach(element => {
              if(element.doctor_id==this.doctorInfo[0].doctor_id)
              {
                this.doctorInfo[0].dd = element;

                if(element.start_time)
                {
                  console.log(element.start_time.time);
                  // console.log()
                }
              }
            });
            console.log(this.doctorInfo);
          }
        }
      })
    }, (err) => {
      if (err) {
        console.log(err);
      }
    })
  }

  sortDataFromArray()
  {
    console.log(this._commonService.searchResults.fulfillments[this.search_index]);
    setTimeout(() => {
      var date = new Date();
      var start_time = new Date(`${date.getFullYear()}-01-01`+this._commonService.searchResults.fulfillments[this.search_index].start.time.timestamp);
      var end_time = new Date(`${date.getFullYear()}-01-01`+this._commonService.searchResults.fulfillments[this.search_index].end.time.timestamp);
      this.sortTimeSLots(start_time.getHours(),start_time.getMinutes(),end_time.getHours(),end_time.getMinutes());
    }, 500);
    
    /*var results = this._commonService.searchResults[this.search_index]
    console.log(results);

    this.doctorInfo.push({
      service_provider: results.service_provider,
      provider_id: results.provider_id,
      doctor_name: results.doctor_name,
      doctor_id: results.doctor_id,
      doctor_gender: (results.doctor_gender).toLowerCase(),
      doctor_img: results.doctor_image,
      doctor_cred: results.doctor_cred,
      doctor_service_type: results.doctor_service_type=="NA"?"":results.doctor_service_type,
      doctor_service_category: results.doctor_service_category,
      item_id: results.item_id,
      quote: results.quote,
      start: results.start,
      end: results.end
    });

    console.log(this.doctorInfo);*/
    /*
    var results = JSON.parse(data.request_body);
          // console.log(results);

          this.doctorInfo = [];
          if(results.status_code==200 && results.hasOwnProperty("context") && results.hasOwnProperty("message") && results.message.hasOwnProperty("order") && results.message.order.hasOwnProperty("provider"))
          {
            // console.log("------------->1");
            
            // (results.message.order.provider).forEach(providerData => {
            // console.log("------------->2");
            results.message.order.fulfillment.forEach(fulfillmentData => {
              console.log("------------->3");

              var expression = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
              var regex = new RegExp(expression);
              // if(fulfillmentData.person.image!=null && !fulfillmentData.person.image.match(regex)) {
              //   fulfillmentData.person.image = "";
              // }

              if(fulfillmentData.agent.image!=null && !fulfillmentData.agent.image.match(regex)) {
                fulfillmentData.agent.image = "";
              }

              this.doctorInfo.push({
                service_provider: results.message.order.provider.descriptor.name,
                // provider_id: providerData,
                // hospital_name: providerData, //.descriptor.name,
                doctor_name: fulfillmentData.agent.name,
                doctor_id: fulfillmentData.agent.id,
                doctor_gender: (fulfillmentData.agent.gender).toLowerCase(),
                doctor_img: fulfillmentData.agent.image,
                doctor_cred: fulfillmentData.agent.cred,
                doctor_service_type: fulfillmentData.type=="NA"?"":fulfillmentData.type,
                doctor_service_category: "",
                item_id: null,
                quote: null
              });
            });

            results.message.order.items.forEach(item => {
              this.doctorInfo.forEach(doctor => {
                if(doctor.doctor_id==item.fulfillment_id)
                {
                  doctor.item_id = item.id
                  // results.message.order.categories.forEach(category => {
                  //   if(category.id==item.category_id)
                  //   {
                  //     doctor.doctor_service_category = category.descriptor.name=="NA"?"":category.descriptor.name;
                  //     doctor.item_id = item.id;
                  //   }
                  // });
                }
              });
            });

            this.doctorInfo[0].quote=results.message.order.quote;
            
            this.searchResults.forEach(element => {
              if(element.doctor_id==this.doctorInfo[0].doctor_id)
              {
                this.doctorInfo[0].dd = element;

                if(element.start_time)
                {
                  console.log(element.start_time.time);
                  // console.log()
                }
              }
            });
            console.log(this.doctorInfo);
          }*/
  }

  select_slots(index:any)
  {
    $("#time_slots_div").find('ion-chip').removeClass('bg-primary').removeClass('text-white');
    $("#time_slot"+index).addClass('bg-primary').addClass('text-white');
  }

  init()
  {
    var time_slot_divs = $("#time_slots_div").find('ion-chip');
    var time_slot;

    var date = new Date();

    for (let i = 0; i < time_slot_divs.length; i++) {
      const element = time_slot_divs[i];
      if($(element).hasClass('bg-primary'))
      {
        time_slot = $(element).find("ion-label").html();
      }
    }
    // console.log(time_slot);
    var slot_start_time = time_slot.split(" - ")[0];
    var slot_end_time = time_slot.split(" - ")[1];
    // console.log(slot_start_time,slot_end_time);
    // return;
    var param = {
        details: this._commonService.searchResults.fulfillments[this.search_index],
        transaction_id: this._commonService.transaction_id,
        slot_start_time: slot_start_time,
        slot_end_time: slot_end_time
      }
      this._api.init(param).subscribe((res: any) => {
        console.log(res);
        if(res.success && res.body.message.ack.status=="ACK")
        {
          this._router.navigate(["/dashboard/collect-payment",this.search_index]);
        }
      }, (err) => {
        if (err) {
          console.error(err);
        }
      });
  }

}
