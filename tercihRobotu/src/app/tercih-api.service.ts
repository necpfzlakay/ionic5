import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TercihApiService {
public degis:any=[];
public dataUrl: string = "http://yerelsecim.co/14temmuz/Necip/tercihrobotu/webservis.php?kelime_al=";
public userLoginUrl: string ="http://yerelsecim.co/14temmuz/Necip/tercihrobotu/webservis.php?type=doLogin&username=";
public devam:string= "&password=";
public favoriekleUrl= "http://yerelsecim.co/14temmuz/Necip/tercihrobotu/webservis.php?type=favoriekle&okul_id=";
public favoriekleUrlDevam1: string= "&username=";
public favoriCekUrl:string="http://yerelsecim.co/14temmuz/Necip/tercihrobotu/webservis.php?type=favoricek&username=";

constructor(private httpClient: HttpClient) { }

universiteCek(kelime){
  return this.httpClient.get(this.dataUrl+kelime);
}

userLogin(user,pass){
  alert ("giris yapılıyor.");
    
  return this.httpClient.get(this.userLoginUrl+user+this.devam+pass);

}

favoriEkle(id,username){
  return this.httpClient.get(this.favoriekleUrl+id+this.favoriekleUrlDevam1+username);
}

favoriCek(username){
return this.httpClient.get(this.favoriCekUrl + username);
}


}
