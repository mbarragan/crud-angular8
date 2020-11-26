import { Component, OnInit } from '@angular/core';
import User from 'src/app/User';
import { UsersService } from '../../users.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

  users : any;

  constructor( private usersService: UsersService) {     
  }

  ngOnInit() {
    this.retrieveUsers();
  }

  retrieveUsers() {
    this.usersService.getAll()
      .subscribe(data => {
          this.users = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

}
