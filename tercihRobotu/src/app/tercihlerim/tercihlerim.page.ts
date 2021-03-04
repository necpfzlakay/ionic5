import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TercihApiService } from '../tercih-api.service';

@Component({
  selector: 'app-tercihlerim',
  templateUrl: './tercihlerim.page.html',
  styleUrls: ['./tercihlerim.page.scss'],
})
export class TercihlerimPage implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private service: TercihApiService) { }
public userfav: any=[];
public tercih: any=[];
public bilgi2: any=[];

  ngOnInit() {
    this.bilgi2 = JSON.parse(localStorage.getItem('json'))[0] || [];

    this.userfav =  JSON.parse(localStorage.getItem('userinfos'))[0] || [];
    console.log("Favoriye eklendi  "+ this.userfav.username );
  
   this.service.favoriCek(this.userfav.username).subscribe(data=>{this.tercih = data;
    console.log("gelen JSON: " + this.tercih);
    localStorage.setItem('json',JSON.stringify(this.tercih));
  
   })


  }



// calistir(){
//   this.userfav =  JSON.parse(localStorage.getItem('userinfos'))[0] || [];
//   console.log("Favoriye eklendi  "+ this.userfav.username );

//  this.service.favoriCek(this.userfav.username).subscribe(data=>{this.tercih = data;
//   console.log("gelen JSON: " + this.tercih);
//   localStorage.setItem('json',JSON.stringify(this.tercih));

//  })}

 // tercihCek(kelime){
  //   console.log("gelen kelime: "+ kelime)
  //   this.service.universiteCek(kelime).subscribe(data=>{this.uniler = data;
  //     console.log("gelen JSON: " + this.uniler);
  //     localStorage.setItem('json',JSON.stringify(this.uniler));

  //   })
  // }

}
