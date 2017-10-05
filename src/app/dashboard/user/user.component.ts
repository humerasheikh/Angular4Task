import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder,FormArray, Validators } from '@angular/forms';
import {User} from '../../Model/User';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DataService } from "../../service/data.service";


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
 
})
export class UserComponent implements OnInit {
  editMode:boolean;
  id:number;
  userForm: FormGroup;
  currentUser;
  imageName='';

  constructor(private activatedRoute: ActivatedRoute, private dataService:DataService,private fb: FormBuilder,private router:Router) {
     debugger;
   }

  ngOnInit() {
    debugger;
    this.createForm();
    
  }

  createForm() {
    let name = '';
    let job = '';
 
     this.userForm = new FormGroup({
      'name' : new FormControl(name),
      'job' : new FormControl(job),
 
         });

      }
   
   
RegisterUser(model)
{
  var data=this.userForm.value;
  // var result=this.dataService.RegisterUser(model);
  this.dataService.RegisterUser(model).subscribe(
    data=>{
      this.router.navigate(['dashboard/userListing']);
    });
}
}
