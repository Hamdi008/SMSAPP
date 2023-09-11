import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedDbService {

  constructor(private http: HttpClient) { }

  private url = "http://127.0.0.1:8080";

  addUser(user: any) {
    return this.http.post(this.url + "/api/add-user", user);
  }
}
