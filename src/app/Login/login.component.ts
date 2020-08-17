import { Component, OnInit } from '@angular/core';
import { Router} from  "@angular/router"

 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  txtUsername:string;
  txtPassword:string;
  isAuthenticate:boolean;
 

  constructor( public _router:Router) { }

  ngOnInit(): void {
  }

  Login(){
debugger;
   
   if(this.txtUsername=="admin" && this.txtPassword=="admin123")
   {
    this._router.navigate(['/Dashboard/Add'])
   }
   else
     this.isAuthenticate=false;
}

}
