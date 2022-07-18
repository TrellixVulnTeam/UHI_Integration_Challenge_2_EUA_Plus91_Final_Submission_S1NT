import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';
import { CommonService } from 'src/app/services/common/common.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.page.html',
  styleUrls: ['./search-result.page.scss'],
})
export class SearchResultPage implements OnInit {

  public transaction_id: any;

  constructor(
    public _commonService: CommonService,
    public _api: ApiService
  ) { }

  ngOnInit() {
    this._commonService.presentLoading();
    // this._commonService.SOCKET.on('on_search', (data) => {
    //   console.log("Socket Triggered: on_search", data);
    //   this.transaction_id= data.context.transaction_id;
    //   console.log("transaction_id",this.transaction_id);
    // });
  }

  get_onSearchData()
  {
    let param = {
      "transaction_id": this.transaction_id
    }
    this._api.get_onSearchData(param).subscribe((res: any) => {
      console.log(res);
    }, (err) => {
      if (err) {
        console.log(err);
      }
    })
  }
}
