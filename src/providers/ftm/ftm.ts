import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';


@Injectable()
export class FtmProvider {
  
  apiUrl = "http://127.0.0.1/FindTeamMate/";
  public errServer="ok";

  constructor(public http: HttpClient, public translate: TranslateService) {
  
  }


  checkNicknameAvailability(nickname:string){
    let data = new Promise(resolve => {
      this.http.get(this.apiUrl+"new_user.php?nickname="+nickname).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
        return err;
      });
    })
    return data;
  }

  checkEmailAvailability(email:string){
    let data = new Promise(resolve => {
      this.http.get(this.apiUrl+"new_user.php?email="+email).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
        return err;
      });
    })
    return data;
  }

  newUser(nickname:string, password:string, email:string){console.log('newuser');
    let data = new Promise(resolve => {
      this.http.post(this.apiUrl+"new_user.php", {'nickname':nickname, 'password':password, 'email':email}, {
        headers: { 'Content-Type': 'application/json' }
      }).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
        return err;
      });
    })
    return data;
  }


  getLog(nickname:string, password:string){

    let data = new Promise(resolve => {
      this.http.post(this.apiUrl+"login.php", {'nickname':nickname, 'password':password}, {
        headers: { 'Content-Type': 'application/json' }
      }).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
        return null;
      });
    })
    return data;
    
  }

  getGames(){
    let data = new Promise(resolve => {
      this.http.get(this.apiUrl+"games.php?all").subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
        return err;
      });
    })
    return data;
  }

  switchLanguage(language:string){
    this.translate.use(language);
  }

  
}