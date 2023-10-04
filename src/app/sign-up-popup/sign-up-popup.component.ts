import { Component } from '@angular/core';

@Component({
  selector: 'app-sign-up-popup',
  templateUrl: './sign-up-popup.component.html',
  styleUrls: ['./sign-up-popup.component.css']
})
export class SignUpPopupComponent {
  showPopup = false; // Initially, hide the popup

  // Simulated sign-up function that sets showPopup to true on success
  signup() {
    // Make an API call here (e.g., using HttpClient)
    // On successful response, set showPopup to true
    this.showPopup = true;
  }

  // Close the popup
  closePopup() {
    this.showPopup = false;
  }
}
