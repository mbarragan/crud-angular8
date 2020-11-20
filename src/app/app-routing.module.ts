import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddUserComponent } from './user/add-user/add-user.component';
import { ListUserComponent } from './user/list-user/list-user.component';
import { FindUserComponent } from './user/find-user/find-user.component';
import { EditUserComponent } from './user/edit-user/edit-user.component';
import { DeleteUserComponent } from './user/delete-user/delete-user.component';

const routes: Routes = [
  {
    path:'user/create',
    component: AddUserComponent
  },
  {
    path:'user/list',
    component: ListUserComponent
  },
  {
    path:'user/:id',
    component: FindUserComponent
  },
  {
    path:'user/edit/:id',
    component: EditUserComponent
  },
  {
    path:'user/delete/:id',
    component: DeleteUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
