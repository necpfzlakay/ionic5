import { createOfflineCompileUrlResolver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
/////////////////////////////////////////////////////////////////////////////////

export class FolderPage implements OnInit {
  public folder: string;
  public ruyalarim:any=[];

  constructor(private activatedRoute: ActivatedRoute, private ruyaGetir: ApiService) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }











ruyaAl(kelime){
  console.log("gelen kelime " + kelime);

  this.ruyaGetir.ruyaUrl(kelime).subscribe(data =>{
    this.ruyalarim = data;
    
    console.log("gelen JSON: " + this.ruyalarim);

    localStorage.setItem('json',JSON.stringify(this.ruyalarim))
  });
}


}
