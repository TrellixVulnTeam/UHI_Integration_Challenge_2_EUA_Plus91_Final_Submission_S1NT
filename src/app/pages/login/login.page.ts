import { Component, OnInit } from '@angular/core';
import { $ } from 'protractor';
import { CommonService } from 'src/app/services/common/common.service';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    public _api: LoginService,
    public _commonService: CommonService
  ) {

  }

  ngOnInit() { }

  ngOnDestroy() { }

}
