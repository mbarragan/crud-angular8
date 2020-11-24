import { Component, OnInit } from '@angular/core';
import User from 'src/app/User';
import { UsersService } from '../../users.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

  users : User[];

  constructor( private us: UsersService) { 
    this.us.getAll();
  }

  ngOnInit() {
  }

}
