import { Injectable } from '@angular/core';
import { LoadingController, ToastController } from '@ionic/angular';
import { environment } from '../../../environments/environment';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  public SOCKET = environment.SOCKET;
  public transaction_id: any;

  /* Global Variables */
  public searchResults : any = {};
  public onInitData : any;

  public contextData: any;

  constructor(
    public _loadingController: LoadingController,
    public _toastController: ToastController,
    public _geolocation: Geolocation
  ) {
    // this.searchResults.fulfillments = {};
    // this.SOCKET.on('on_search', (data) => {
    //   console.log("Socket Triggered: on_search", data);
    //   this.contextData = data.context;
    //   console.log(this.contextData);
    // });
    // this.SOCKET.on('on_confirm', (data) => {
    //   this.searchResults.confirm = data;
    //   console.log("Socket Triggered: on_confirm", data);
    // });
    // this.SOCKET.on('on_init', (data) => {
    //   this.searchResults.order = data;
    //   console.log("Socket Triggered: on_init", data);
    // });
    // this.SOCKET.on('on_select', (data) => {
    //   console.log("Socket Triggered: on_select", data);
    // });
    // this.SOCKET.on('on_status', (data) => {
    //   console.log("Socket Triggered: on_status", data);
    // });

    // this.SOCKET.on('on_search', (data) => {
    //   console.log("Socket Triggered: on_search", data);
    //   this.transaction_id= data.context.transaction_id;
    // });

    // this.SOCKET.on('on_select', (data) => {
    //   console.log("Socket Triggered: on_select", data);
    // });

    // setInterval(()=>{
    //   this.getGeolocation();
    // },5000);
  }

  /* Loader Display Function */
  async presentLoading(duration=3000) {
    const loading = await this._loadingController.create({
      message: 'Please wait...',
      duration: duration
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
  }

  /* Toast Display Function */
  async presentToast(msg) {
    const toast = await this._toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }

  async getGeolocation()
  {
    this._geolocation.getCurrentPosition().then((resp) => {
      console.log("resp.coords.latitude",resp.coords.latitude);
      console.log("resp.coords.longitude",resp.coords.longitude);
     }).catch((error) => {
       console.log('Error getting location', error);
     });
     
  }

}
