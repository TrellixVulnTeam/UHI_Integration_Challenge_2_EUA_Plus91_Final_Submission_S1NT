import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  API = environment.API;

  constructor(private http: HttpClient) { }
  
  search(body) {
    return this.http.post(this.API + 'search', body);
  }

  get_onSearchData(body) {
    return this.http.post(this.API + 'get_onSearchData', body);
  }

  select(body) {
    return this.http.post(this.API + 'select', body);
  }

  get_onSelectData(body)
  {
    return this.http.post(this.API + 'get_onSelectData', body);
  }

  init(body) {
    return this.http.post(this.API + 'init', body);
  }

  get_onInitData(body)
  {
    return this.http.post(this.API + 'get_onInitData', body);
  }

  confirm(body) {
    return this.http.post(this.API + 'confirm', body);
  }

  get_onConfirmData(body)
  {
    return this.http.post(this.API + 'get_onConfirmData', body);
  }

}
