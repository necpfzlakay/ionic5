import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TercihApiService } from '../tercih-api.service';
@Component({
  selector: 'app-detay',
  templateUrl: './detay.page.html',
  styleUrls: ['./detay.page.scss'],
})
export class DetayPage implements OnInit {
public bilgiNo: string;
public bilgi:any=[];
public userfav:any=[];
public favlar:any=[];
  constructor(private activatedRoute:ActivatedRoute,private service: TercihApiService) { }

  ngOnInit() {
    this.bilgiNo = this.activatedRoute.snapshot.paramMap.get('bilgiNo');
    console.log("no "+this.bilgiNo);
    this.bilgi = JSON.parse(localStorage.getItem('json'))[this.bilgiNo] || [];

  }


favoriEkle(id){

  this.userfav =  JSON.parse(localStorage.getItem('userinfos'))[0] || [];
  console.log("Favoriye eklendi  "+ id + " "+ this.userfav.username );

  this.service.favoriEkle(id,this.userfav.username).subscribe(data=>{this.favlar = data;
    console.log("gelen JSON: " + this.favlar);
    localStorage.setItem('favoriler',JSON.stringify(this.favlar));
    alert ("favoriler eklendi");
})
};





}

