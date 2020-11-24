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
  constructor(private fb: FormBuilder, private us: UsersService) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      UserName: ['', Validators.required ],
      UserNick: ['', Validators.required ]
    });
  }

  addUser(UserName, UserNick) {
    this.us.addUser(UserName, UserNick);
  }

  ngOnInit() {
  }

}
