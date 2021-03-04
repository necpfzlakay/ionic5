import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

/////////////////////////////////////////////////////////////////////////////////

export class ApiService {

  public url:string='http://yerelsecim.co/servis/gokhan_ruya/ruya_servis.php?kelime_al=';
  
constructor(private http:HttpClient) { }
  
  ruyaUrl(kelime){
    return this.http.get(this.url+kelime);
  }

}

