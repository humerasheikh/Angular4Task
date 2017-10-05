import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';
import { UserListingComponent } from './dashboard/user-listing/user-listing.component';
import { UserComponent } from './dashboard/user/user.component';
 import {HttpClientModule} from '@angular/common/http';
 import { RouterModule, Routes } from '@angular/router';
import { FormsModule,ReactiveFormsModule }   from '@angular/forms';
import {guard} from './Guard/login.guard';
 import { DataService } from './service/data.service';

const appRoutes: Routes = [
   { path: 'login', component: LoginComponent },
    { path: '', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'dashboard',component: DashboardComponent,canActivate: [guard],
               children:[
              
                  {path:'userListing',component:UserListingComponent},
                  {path:'addUser',component:UserComponent},
                  {path:'editUser',component:UserComponent}
               ] }
              ];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    RegisterComponent,
    UserListingComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
     RouterModule.forRoot(
      appRoutes
    ), 
    HttpClientModule,
    ReactiveFormsModule
     
  ],
  providers: [DataService,guard],
  bootstrap: [AppComponent]
})
export class AppModule { }
