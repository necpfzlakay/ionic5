import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TercihApiService } from '../tercih-api.service';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;
  public kelime: string;
  public uniler: any=[];
  
  constructor(private activatedRoute: ActivatedRoute, private service: TercihApiService) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    
    this.detay = this.activatedRoute.snapshot.paramMap.get('id');
  }

  kelimeAl(kelime){
    console.log("gelen kelime: "+ kelime)
    this.service.universiteCek(kelime).subscribe(data=>{this.uniler = data;
      console.log("gelen JSON: " + this.uniler);
      localStorage.setItem('json',JSON.stringify(this.uniler));

    })
  }




}
