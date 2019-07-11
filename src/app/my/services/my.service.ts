import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Profile } from '../domain';
import { environment } from 'src/environments/environment.prod';

@Injectable({providedIn:'root'})
export class MyService {
  constructor(private http: HttpClient){}
  getProfile() {
    return this.http.get<Profile>(`${environment.baseUrl}/profile`)
  }
}