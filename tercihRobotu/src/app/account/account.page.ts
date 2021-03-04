import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TercihApiService } from '../tercih-api.service';
@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {
loggined:string;
public login:any=[];
public user:string="[]";
  constructor(private activatedRoute: ActivatedRoute,private service: TercihApiService) { }
// user= JSON.parse(localStorage.getItem('userinfos'))[this.loggined] || [];

  ngOnInit() {
  }


  doLogin(username,password){
    console.log("bilgiler: "+ username+ " "+ password);

    this.service.userLogin(username,password).subscribe(data=>{this.login = data;
    this.loggined = data; 
    if (this.loggined=='') {
      alert ("yanlis");
    }
    else{
          console.log("USER INFOS "+this.loggined);
      localStorage.setItem('userinfos',JSON.stringify(this.loggined));
    }

    })
  }







}
