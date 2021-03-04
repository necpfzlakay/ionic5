import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {


  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }







  public folder: string;
  public kilo: number=0;
  public boy: number=0;
  public sonuc: number=0;


hesapla(boy,kilo){
	this.sonuc= kilo/((boy/100) * (boy/100));
}


dongu = [
  {no:1, adi: "Necip", cinsiyet: "erkek"},
  {no:2, adi: "kadri", cinsiyet: "erkek"},
  {no:3, adi: "simay", cinsiyet: "kız"},
  {no:4, adi: "nurefsan", cinsiyet: "kız"},
  {no:5, adi: "ahmed", cinsiyet: "erkek"}
];









}
