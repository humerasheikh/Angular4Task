import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { DataService } from "../service/data.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  
})
export class DashboardComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
    logOut() {
    localStorage.removeItem("isLoggedIn");
         this.router.navigate['/login'];
             
  }

}
