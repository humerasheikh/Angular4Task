import {Injectable} from '@angular/core';
import {User} from '../Model/user';
import{Login} from '../Model/login';
import{Register} from '../Model/register';
import{UserListing}from'../Model/userListing';
import { HttpClient,HttpHeaders,HttpParams} from '@angular/common/http';
import { Observable } from 'Rxjs/observable';
import 'Rxjs/add/operator/toPromise';
import { Router } from "@angular/router";



@Injectable()
export class DataService {
    constructor(private _httpClient:HttpClient,private router:Router) {
  }

  RegisterUser(model) {
      return this._httpClient.post("https://reqres.in/api/users",model);
  }
  
  Register(model)
  {
    return this._httpClient.post("https://reqres.in/api/register",model);
  }

  LoginReg(login:Login) {
    
      return this._httpClient.get("https://reqres.in/api/login",{params: new HttpParams().set('email', login.email).set('password',login.password)});

}
UserEdit(model)
{
  return this._httpClient.put("https://reqres.in/api/users",model);

}
UserDelete(id:number)
{
  return this._httpClient.get("https://reqres.in/api/users");
  // .subscribe(data=>
  // {
  //   this.router.navigate(['/dashboard/editUser'])
  // });
}

  UserListing() {
      return this._httpClient.get("https://reqres.in/api/users?page=2");
  }

  getUserById(id:number) {
     return this._httpClient.get("https://reqres.in/api/users"+id);
  }

}