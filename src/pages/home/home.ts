import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage implements OnInit{

  apiUrl = "http://findteammates/";

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public http: HttpClient
              ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  ngOnInit(){

  }

  getTopGames(){
    let data = new Promise(resolve => {
      this.http.get(this.apiUrl+"games.php?top").subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
        return err;
      });
    })
    return data;
  }

  getLastGames(){
    let data = new Promise(resolve => {
      this.http.get(this.apiUrl+"games.php?last").subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
        return err;
      });
    })
    return data;
  }
  getHeadlineGames(){
    let data = new Promise(resolve => {
      this.http.get(this.apiUrl+"games.php?headline").subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
        return err;
      });
    })
    return data;
   }

}
