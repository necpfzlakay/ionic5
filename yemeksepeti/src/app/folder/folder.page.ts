import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { YemeksepetiService } from '../yemeksepeti.service';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;
  public degis: any=[];
  public firmalarim: any=[];
  constructor(private activatedRoute: ActivatedRoute,private service:YemeksepetiService) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    this.firmacek();
  }

  
firmacek(){


 
   this.service.firmaAl().subscribe(data =>{
       this.firmalarim = data;

    	 	 console.log("Gelen JSON  "+this.firmalarim);
        localStorage.setItem('json',JSON.stringify(this.firmalarim))
    });
}
  















}
