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

  public isSocketTrigger : boolean = false;

  constructor(
    public _router: Router,
    public _api: ApiService,
    public _commonService: CommonService
  ) {
    if(!this._commonService.searchResults.hasOwnProperty("fulfillments"))
    {
      this._commonService.searchResults.fulfillments=[];
    }
    if(this._commonService.transaction_id==null || this._commonService.transaction_id==undefined)
    {
      this._router.navigate(["/dashboard/"]);
    }
  }

  ngOnInit() {
    setTimeout(() => {
      this.get_onSearchData();
    }, 500);
    this._commonService.SOCKET.on('on_search', (data) => {
      this.isSocketTrigger = true;
    });
  }

  sortData(res: any)
  {
    if(res.status_code==200)
    {
      if(res.hasOwnProperty("context") && res.hasOwnProperty("message") && res.message.hasOwnProperty("catalog"))
      {
        if(res.message.catalog.hasOwnProperty("fulfillments"))
        {
          res.message.catalog.fulfillments.forEach(async (fulfillment) => {
            res.message.catalog.items.forEach((item) => {
              if(parseInt(fulfillment.id)==parseInt(item.fulfillment_id))
              {
                let fulfillmentObj = fulfillment;
                fulfillmentObj["items"] = item;
                fulfillmentObj["context"] = res.context;
                let tempArr = JSON.stringify(fulfillmentObj);
                this._commonService.searchResults.fulfillments.push(JSON.parse(tempArr));
              }
            });
          });
          if(this.isSocketTrigger)
          {
            this.isSocketTrigger = false;
            this.get_onSearchData();
          }
        }
      }
    }
    console.log("fulfillments count -> ",(this._commonService.searchResults.fulfillments).length);
  }

  get_onSearchData()
  {
    let param = {
      "transaction_id": this._commonService.transaction_id
    }
    this._commonService.presentLoading(2000);
    this._api.get_onSearchData(param).subscribe((res: any) => {
      this._commonService.searchResults.fulfillments=[];
      // this._commonService.presentLoading(3000);
      res.data.forEach(data => {
        if(data.hasOwnProperty("request_body"))
        {
          var results = JSON.parse(data.request_body);
          this.sortData(results);
          
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
