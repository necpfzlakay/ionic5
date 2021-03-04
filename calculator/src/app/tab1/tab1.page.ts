import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  constructor() {}
public gosterge: number=0;
public count: number=0;

sayi(x){
this.gosterge = this.gosterge*10 + x;
}
toplama(){

}
cikarma(){

}
carpma(){

}
bolme(){

}
sifirla(){
this.gosterge=0;
}
artieksi(){
this.gosterge= this.gosterge * -1;
}
yuzde(){

}
virgul(){

}












}
