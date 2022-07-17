import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api/api.service';
import { CommonService } from 'src/app/services/common/common.service';
// import { NgxTypeaheadModule } from 'ngx-typeahead';
// import { typeahead } from 'src/assets/typeahead/typeahead.bundle.js';

// declare function typeahead(): any;

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  
  // name = "";
  // title = "";
  
  // public url = "//suggestqueries.google.com/complete/search";
  // public params = {
  //   hl: "en",
  //   ds: "yt",
  //   xhr: "t",
  //   client: "youtube"
  // };
  // public query = "test";
  
  public isSearchOpen: boolean = true;
  
  public homeOption=[
    { title: 'Teleconsultation', url: '/dashboard/teleconsultation', icon: './assets/teleconsultation-blue.png' },
    { title: 'Physical Consultation', url: '/dashboard/physical-consultation', icon: './assets/doctor-blue.png' },
    { title: 'Ambulance', url: '/dashboard/ambulance', icon: './assets/ambulance-blue.png' },
    { title: 'Lab Test', url: '/dashboard/lab-test', icon: './assets/lab-report-blue.png' },
    { title: 'Blood Bank', url: '/dashboard/blood-bank', icon: './assets/blood-bank-blue.png' }
  ];
  
  constructor(
    public _router: Router,
    public _api: ApiService,
    public _commonService: CommonService
    ) {
      
  }
  
  ngOnInit() {

//     var app = angular.module('home', ['ui.bootstrap']);
// app.controller('SearchController', function ($scope){                     
// 	$scope.selected="";

//     //  Set your object 
// 	$scope.objects = [
// 		{id:1, name : 'Dilip', type :{ title : 'a'}},
// 		{id:2, name : 'Devendra', type :{ title : 'b'}},
// 		{id:3, name : 'Jayesh', type :{ title : 'a'}},
// 		{id:4, name : 'Jekin', type :{ title : 'c'}},
// 		{id:5, name : 'Gaurang', type :{ title : 'a'}},
// 		{id:6, name : 'Bhavin', type :{ title : 'e'}},

// 	];

// }); 

    // $('#the-basics .typeahead').typeahead({
    //   hint: true,
    //   highlight: true,
    //   minLength: 1
    // },
    // {
    //   name: 'states'
    // });
    

    /*var typeahead = jQuery.fn.typeahead.noConflict();
    jQuery.fn._typeahead = typeahead;
    
    $('.typeahead').typeahead({
      hint: true,
      highlight: true, 
      minLength: 1 
    },
    {
      name: 'cars'
    });
    $.typeahead({
      input: '.js-typeahead-country_v1',
      order: "desc",
      source: {
        data: [
          "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda",
          "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh",
          "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia",
          "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burma",
          "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Central African Republic", "Chad",
          "Chile", "China", "Colombia", "Comoros", "Congo, Democratic Republic", "Congo, Republic of the",
          "Costa Rica", "Cote d'Ivoire", "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti",
          "Dominica", "Dominican Republic", "East Timor", "Ecuador", "Egypt", "El Salvador",
          "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Fiji", "Finland", "France", "Gabon",
          "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Greenland", "Grenada", "Guatemala", "Guinea",
          "Guinea-Bissau", "Guyana", "Haiti", "Honduras", "Hong Kong", "Hungary", "Iceland", "India",
          "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan",
          "Kazakhstan", "Kenya", "Kiribati", "Korea, North", "Korea, South", "Kuwait", "Kyrgyzstan", "Laos",
          "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg",
          "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands",
          "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Mongolia", "Morocco", "Monaco",
          "Mozambique", "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger",
          "Nigeria", "Norway", "Oman", "Pakistan", "Panama", "Papua New Guinea", "Paraguay", "Peru",
          "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda", "Samoa", "San Marino",
          "Sao Tome", "Saudi Arabia", "Senegal", "Serbia and Montenegro", "Seychelles", "Sierra Leone",
          "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "Spain",
          "Sri Lanka", "Sudan", "Suriname", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan",
          "Tajikistan", "Tanzania", "Thailand", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey",
          "Turkmenistan", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States",
          "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"
        ]
      },
      callback: {
        onInit: function (node) {
          console.log('Typeahead Initiated on ' + node.selector);
        }
      }
    });*/
    
  }
  
  // handleResultSelected(result) {
  //   this.query = result;
  // }
  
  toggleSearchOption()
  {
    this.isSearchOpen = !this.isSearchOpen;
  }
  
  search()
  {
    var searchvalue = $("#searchInput").val();
    var start_date = $("#start_date").val();
    var end_date = $("#end_date").val();
    console.log(searchvalue,start_date,end_date);
    
    if(searchvalue=="")
    {
      this._commonService.presentToast("Enter Search Keywords");
      return;
    }
    else if(start_date=="")
    {
      this._commonService.presentToast("Select Start Date");
      return;
    }
    else if(end_date=="")
    {
      this._commonService.presentToast("Select End Date");
      return;
    }
    
    this._commonService.presentLoading();
    
    let param = {
      searchvalue: searchvalue,
      start_date: start_date,
      end_date: end_date,
      type:"Teleconsultation"
    };
    // console.log(param);
    this._api.search(param).subscribe((res: any) => {
      console.log("search response");
      console.log(res);
      if(res.success && res.body.message.ack.status=="ACK")
      {
        this._commonService.transaction_id = res.transaction_id;
        this._router.navigate(["/dashboard/search-results"]);
      }
    }, (err) => {
      if (err) {
        console.log(err);
      }
    })
  }
  
  onStartDateChange()
  {
    var start_date = $("#start_date").val();
    console.log("onStartDateChange",start_date);
    $("#end_date").attr("min",start_date+"");
    
  }
  
}
