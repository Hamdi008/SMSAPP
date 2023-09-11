import { Component } from '@angular/core';
import { SharedDbService } from '../shared-db.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {

  constructor(private sharedDBService: SharedDbService) {
  }

  getAllUsers() {
    this.sharedDBService.getAllUsers().subscribe(
      res => { console.log(res) },
      err => { console.log(err); }
    );
  }
}
