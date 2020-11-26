import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { UsersService } from '../../users.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  angForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private usersService: UsersService) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.formBuilder.group({
      UserName: ['', Validators.required ],
      UserNick: ['', Validators.required ]
    });
  }

  addUser(UserName, UserNick) {
    this.usersService.addUser(UserName, UserNick);
  }

  ngOnInit() {
  }

}
