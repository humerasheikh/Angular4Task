import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder,FormArray, Validators } from '@angular/forms';
import {Register} from '../Model/Register';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DataService } from "../service/data.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  
})
export class RegisterComponent implements OnInit {
  editMode:boolean;
  userId:number;
  email:string;
  password:string;
  RegForm: FormGroup;
  currentUser;
  constructor(private activatedRoute: ActivatedRoute, private dataService:DataService,private fb: FormBuilder,private router:Router) { }

  ngOnInit() {
  }

   Register() {
    let reg:Register= new Register();
    if(this.email!= "" && this.email!=null &&this.email!=undefined) {
      reg.email=this.email;
      reg.password=this.password;
      this.dataService.Register(reg).subscribe((data) => {
        localStorage.setItem("isLoggedIn",data['token'])
      this.router.navigate(['/login']);
    
         });

 }
 
   }

}
