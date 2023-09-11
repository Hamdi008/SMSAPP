import { Component } from '@angular/core';
import { SharedDbService } from '../shared-db.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

  user = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    jobTitle: ""
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
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            jobTitle: ""
          }
        },

        err => {
          console.log(err);
        }
      );



  }
}
