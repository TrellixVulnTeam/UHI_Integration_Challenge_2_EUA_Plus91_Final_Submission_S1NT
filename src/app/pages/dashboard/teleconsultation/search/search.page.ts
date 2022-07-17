import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  constructor(
    public _router: Router,
    public _api: ApiService
  ) { }

  ngOnInit() {
  }

  search()
  {
    let param = {
      "call":1
    };
    this._api.search(param).subscribe((res: any) => {
      console.log(res);
      this._router.navigate(["/dashboard/teleconsultation/search-result"]);
    }, (err) => {
      if (err) {
        console.log(err);
      }
    })
  }

}
