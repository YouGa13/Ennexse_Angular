import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './users/add-user/add-user.component';
import { AllUserComponent } from './users/all-user/all-user.component';


const routesPublic: Routes = [
  {path: 'users', component: AllUserComponent},
  {path: 'user', component: AddUserComponent},
  {path: 'edit-user/:userId', component: AddUserComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routesPublic)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
