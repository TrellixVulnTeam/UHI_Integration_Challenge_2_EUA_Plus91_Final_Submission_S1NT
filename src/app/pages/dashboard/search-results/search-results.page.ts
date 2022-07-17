import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api/api.service';
import { CommonService } from 'src/app/services/common/common.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.page.html',
  styleUrls: ['./search-results.page.scss'],
})
export class SearchResultsPage implements OnInit {

  constructor(
    public _router: Router,
    public _api: ApiService,
    public _commonService: CommonService
  ) {
    if(this._commonService.transaction_id==null || this._commonService.transaction_id==undefined)
    {
      this._commonService.transaction_id = "cc4c1bbc-8f76-4b15-aeb5-1401be1fe1ec";
      // this._router.navigate(["/dashboard/"]);
    }
  }

  ngOnInit() {
    this.get_onSearchData();
    // this.getdataTest();
    this._commonService.SOCKET.on('on_search', (data) => {
      this.get_onSearchData();
    });
  }

  getdataTest(res: any)
  {
    // var res = {
    //   "context": {
    //     "domain": "NA",
    //     "country": "IND",
    //     "city": "PUNE",
    //     "action": "search",
    //     "core_version": "NA",
    //     "message_id": "104ab729-47e9-4f43-a6d5-10ccf5cf7cc1",
    //     "transaction_id": "7fbbac2e-0a94-4676-8b5a-7cf6143533c9",
    //     "timestamp": "2022-07-16T12:12:59.000000",
    //     "provider_id": "plus91-HSPA",
    //     "provider_uri": "https://ec3c-182-72-250-90.ngrok.io"
    //   },
    //   "message": {
    //     "catalog": {
    //       "descriptor": {
    //         "name": "Korle-Bu Teaching Hospital- Polyclinic"
    //       },
    //       "items": [
    //         {
    //           "id": "1726",
    //           "descriptor": {
    //             "name": "Test the x ray radiology"
    //           },
    //           "price": {
    //             "currency": "INR",
    //             "value": "23.00"
    //           },
    //           "fulfillment_id": "863"
    //         },
    //         {
    //           "id": "1726",
    //           "descriptor": {
    //             "name": "Test the x ray radiology"
    //           },
    //           "price": {
    //             "currency": "INR",
    //             "value": "23.00"
    //           },
    //           "fulfillment_id": "879"
    //         }
    //       ],
    //       "fulfillments": [
    //         {
    //           "id": "863",
    //           "type": "X ray",
    //           "agent": {
    //             "id": "863",
    //             "name": "Dr TNA Archampong",
    //             "gender": "M",
    //             "tags": {
    //               "@abdm/gov/in/first_consultation": "23.00",
    //               "@abdm/gov/in/upi_id": "9999999999@okhdfc",
    //               "@abdm/gov/in/follow_up": null,
    //               "@abdm/gov/in/experience": null,
    //               "@abdm/gov/in/languages": "Eng, Hin",
    //               "@abdm/gov/in/speciality": "Radiology",
    //               "@abdm/gov/in/lab_report_consultation": null,
    //               "@abdm/gov/in/education": null,
    //               "@abdm/gov/in/hpr_id": null,
    //               "@abdm/gov/in/signature": null
    //             }
    //           },
    //           "start": {
    //             "time": {
    //               "timestamp": "T18:30+00:00"
    //             }
    //           },
    //           "end": {
    //             "time": {
    //               "timestamp": "T18:10+00:00"
    //             }
    //           }
    //         },
    //         {
    //           "id": "879",
    //           "type": "X ray",
    //           "agent": {
    //             "id": "879",
    //             "name": "Prof JH Addy",
    //             "gender": "M",
    //             "tags": {
    //               "@abdm/gov/in/first_consultation": "23.00",
    //               "@abdm/gov/in/upi_id": "9999999999@okhdfc",
    //               "@abdm/gov/in/follow_up": null,
    //               "@abdm/gov/in/experience": null,
    //               "@abdm/gov/in/languages": "Eng, Hin",
    //               "@abdm/gov/in/speciality": "Radiology",
    //               "@abdm/gov/in/lab_report_consultation": null,
    //               "@abdm/gov/in/education": null,
    //               "@abdm/gov/in/hpr_id": null,
    //               "@abdm/gov/in/signature": null
    //             }
    //           },
    //           "start": {
    //             "time": {
    //               "timestamp": "T18:30+00:00"
    //             }
    //           },
    //           "end": {
    //             "time": {
    //               "timestamp": "T18:10+00:00"
    //             }
    //           }
    //         }
    //       ]
    //     }
    //   },
    //   "status_code": 200
    // }

    if(res.status_code==200)
    {
      if(res.hasOwnProperty("context") && res.hasOwnProperty("message") && res.message.hasOwnProperty("catalog"))
      {
        if(res.message.catalog.hasOwnProperty("fulfillments"))
        {
          if(!this._commonService.searchResults.hasOwnProperty("fulfillments"))
          {
            this._commonService.searchResults.fulfillments=[];
          }
          res.message.catalog.fulfillments.forEach(fulfillment => {
            res.message.catalog.items.forEach(item => {
              if(parseInt(fulfillment.id)==parseInt(item.fulfillment_id))
              {
                var fulfillmentObj = fulfillment;
                fulfillmentObj["items"] = item;
                fulfillmentObj["context"] = res.context;
                this._commonService.searchResults.fulfillments.push(fulfillmentObj);
              }
            });
          });
        }
      }
      console.log(this._commonService.searchResults.fulfillments);
    }
  }

  get_onSearchData()
  {
    let param = {
      "transaction_id": this._commonService.transaction_id
    }
    // console.log(param);
    this._api.get_onSearchData(param).subscribe((res: any) => {
      console.log("get_onSearchData res");
      // console.log(res);
      this._commonService.searchResults = [];
      res.data.forEach(data => {
        if(data.hasOwnProperty("request_body"))
        {
          var results = JSON.parse(data.request_body);
          console.log(results);
          this.getdataTest(results);
          
          /*if(results.status_code==200 && results.hasOwnProperty("context") && results.hasOwnProperty("message") && results.message.hasOwnProperty("catalog"))
          {
            // (results.message.catalog.providers).forEach(provider => {
              results.message.catalog.fulfillments.forEach(fulfillment => {
                var isDoctorAlreadyAdded = false;
                for(var i=0; i<(this._commonService.searchResults).length;i++)
                {
                  if(this._commonService.searchResults[i].doctor_id == fulfillment.person.id)
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

                  // message.catalog.providers[0].fulfillments[0].quote.price.value
                  this._commonService.searchResults.push({
                    service_provider: results.message.catalog.descriptor.name,
                    // provider_id: results.message.catalog.id,
                    hospital_name: results.message.catalog.descriptor.name,
                    doctor_name: fulfillment.person.name,
                    doctor_id: fulfillment.person.id,
                    doctor_gender: (fulfillment.person.gender).toLowerCase(),
                    doctor_img: fulfillment.person.image,
                    doctor_cred: fulfillment.person.cred,
                    doctor_service_type: fulfillment.type=="NA"?"":fulfillment.type,
                    doctor_service_category: "",
                    quote: fulfillment.quote,
                    start: fulfillment.start,
                    end: fulfillment.end,
                    item_id: null
                  });
                }
              });

              results.message.catalog.items.forEach(item => {
                this._commonService.searchResults.forEach(doctor => {
                  if(doctor.doctor_id==item.fulfillment_id)
                  {
                    doctor.item_id = item.id;
                    // provider.categories.forEach(category => {
                    //   if(category.id==item.category_id)
                    //   {
                    //     doctor.doctor_service_category = category.descriptor.name=="NA"?"":category.descriptor.name;
                    //     doctor.item_id = item.id;
                    //   }
                    // });
                  }
                });

              });
              console.log(this._commonService.searchResults);
            // });
          }*/
        }
      });
    }, (err) => {
      if (err) {
        console.error(err);
      }
    })
  }

  book_appointment(index: any,data: any)
  {
    this._commonService.presentLoading(1000);

    // console.log(index);
    this._router.navigate(["/dashboard/book-appointment",index]);
    return;
    
    // var param = {
    //   provider_id: data.provider_id,
    //   item_id: data.item_id,
    //   fulfillment_id: data.doctor_id,
    //   transaction_id: this._commonService.transaction_id
    // }
    // console.log(data);
    // this._router.navigate(["/dashboard/search-results"]);

  //   this._api.select(param).subscribe((res: any) => {
  //     console.log(res);
  //     if(res.success && res.body.message.ack.status=="ACK")
  //     {
  //       this._router.navigate(["/dashboard/book-appointment"]);
  //     }
  //   }, (err) => {
  //     if (err) {
  //       console.error(err);
  //     }
  //   });
  }
}
