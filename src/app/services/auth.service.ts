import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import { Token } from '../types/token';

@Injectable()
export class AuthService {

  private token: string;

  public set setToken(value: string) {
    this.token = value;
  }

  public get getToken(): string {
    return this.token;
  }

  constructor(private http: HttpClient, private jwtHelper: JwtHelperService) { }

  authenticate(email: string, password: string): Observable<Token> {
    return this.http.post<Token>('http://localhost:3000/api/login', { email, password });
  }

  isAuthenticated(): boolean {
    return this.jwtHelper.isTokenExpired(this.getToken);
  }

  logout() {
    this.setToken = '';
  }
}
