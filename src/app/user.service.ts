import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service';
import { User } from './types/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private auth: AuthService, private http: HttpClient) { }

  listUsers(): Observable<User[]> {
    return this.http.get<User[]>('http://localhost:3000/api/users/list');
  }
}
