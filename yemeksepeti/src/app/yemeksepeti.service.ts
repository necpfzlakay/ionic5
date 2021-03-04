import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class YemeksepetiService {
public url: string = 'http://yerelsecim.co/14temmuz/Necip/yemeksepeti-firma-select.php';

constructor(private http: HttpClient) { }

firmaAl(){
  console.log(this.url);
  return this.http.get(this.url);
}




}
