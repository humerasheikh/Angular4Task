import { Login } from './../Model/Login';
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { DataService } from "../service/data.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  
})
export class LoginComponent implements OnInit {
  email:string;
  password:string;
  //loginForm: FormGroup;
  constructor(private dataService:DataService,private router:Router) { }

  ngOnInit() {
  }

   

 LogIn() {
    let user:Login= new Login();
    if(this.email!= "" && this.email!=null &&this.email!=undefined) {
      user.email=this.email;
      user.password=this.password;
      this.dataService.LoginReg(user).subscribe((data:Login) => {
        localStorage.setItem("isLoggedIn",data['token'])
           this.router.navigate(['/dashboard']);
    
         });
       
    
  }
  

 }}