import { Component } from '@angular/core';
import { SharedDbService } from '../shared-db.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

  user = {
    userName: "",
    email: "",
    password: ""
  }

  constructor(private sharedDBService: SharedDbService) {

  }

  addUser() {
    this.sharedDBService.addUser(this.user)
      .subscribe(
        res => {
          console.log(res);
          console.log(this.user);
          this.user = {
            userName: "",
            email: "",
            password: ""
          }
        },

        err => {
          console.log(err);
        }
      );



  }
}
