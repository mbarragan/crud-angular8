import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ListUserComponent } from './user/list-user/list-user.component';
import { AddUserComponent } from './user/add-user/add-user.component';
import { EditUserComponent } from './user/edit-user/edit-user.component';
import { DeleteUserComponent } from './user/delete-user/delete-user.component';
import { FindUserComponent } from './user/find-user/find-user.component';

import { UsersService } from './users.service';

@NgModule({
  declarations: [
    AppComponent,
    ListUserComponent,
    AddUserComponent,
    EditUserComponent,
    DeleteUserComponent,
    FindUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ UsersService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
