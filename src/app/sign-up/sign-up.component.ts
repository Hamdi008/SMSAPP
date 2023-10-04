import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

  formData: any = {}; // Initialize an empty object to store user input

  constructor(private http: HttpClient) { }

  onSubmit() {
    // Send a POST request to your REST API with this.formData
    this.http.post('http://localhost:8090/api/signup', this.formData)
      .subscribe(
        (response) => {
          // Handle the API response (e.g., show a success message)
          console.log('Registration successful:', response);
        },
        (error) => {
          // Handle API errors (e.g., show an error message)
          console.error('Registration failed:', error);
        }
      );
  }
}
