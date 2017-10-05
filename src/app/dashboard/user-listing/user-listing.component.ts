import { Component, OnInit } from '@angular/core';
import {UserListing} from '../../Model/UserListing';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from "../../Service/data.service";

@Component({
  selector: 'app-user-listing',
  templateUrl: './user-listing.component.html',
  styleUrls: ['./user-listing.component.css'],
  providers:[DataService]
  
})
export class UserListingComponent implements OnInit {
    id: number;
  public result;
  constructor( private dataservice:DataService, private router:Router) { }

  ngOnInit() {
   this.UserListing();
  }
  UserListing(){
 this.dataservice.UserListing().subscribe(data => {
    this.result=data['data'];    
   });
  }
  
  UserEdit() {
    this.id=2;
     this.router.navigate(['dashboard/editUser']);
 
}
UserDelete()
{
   this.id=2;
   this.dataservice.UserDelete(this.id).subscribe(
     data=>{console.log('deleted');}
   );
    this.router.navigate(['dashboard/userListing']);
}
}
