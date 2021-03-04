import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detay',
  templateUrl: './detay.page.html',
  styleUrls: ['./detay.page.scss'],
})
export class DetayPage implements OnInit {
public ruyaNumarası: string;
public bilgi: any;
public toygar;
  constructor(private activatedRoute: ActivatedRoute) { }


  ngOnInit() {
      this.ruyaNumarası = this.activatedRoute.snapshot.paramMap.get('ruyaNo');
      console.log("no "+this.ruyaNumarası);
      this.bilgi = JSON.parse(localStorage.getItem('json'))[this.ruyaNumarası] || [];
  }




}
