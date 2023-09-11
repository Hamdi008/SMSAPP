import { Component } from '@angular/core';
import { SharedDbService } from '../shared-db.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

  constructor(private sharedDBService: SharedDbService) {

  }
}
