import { AddClientFormComponent } from './add-client-form/add-client-form.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from "./login/login.component";

import { ContactUsComponent } from "./contact-us/contact-us.component";
import{ChangePasswordComponent} from "./change-password/change-password.component";
import { ListAgentComponent } from './list-agent/list-agent.component';


const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {path:"admin/addClient",component:AddClientFormComponent},
  {path:'admin/changePassword', component: ChangePasswordComponent},
  { path: 'client', component: ListAgentComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
