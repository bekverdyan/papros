import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { SessionStorageService } from 'ngx-webstorage';
import { Token } from '../types/token';

@Injectable()
export class AuthService {

  private jwtHelper = new JwtHelperService();

  constructor(
    private http: HttpClient,
    private sessionStorage: SessionStorageService,
    private router: Router
  ) { }

  authenticate(email: string, password: string) {
    this.http.post<Token>('http://localhost:3000/api/login', { email, password })
      .subscribe((value: Token) => {
        this.sessionStorage.store('token', value.token);
        this.router.navigateByUrl('/users');
      });
  }

  isAuthenticated(): boolean {
    const token = this.sessionStorage.retrieve('token');

    if (token !== undefined && token !== '') {
      this.jwtHelper.isTokenExpired(token);
    } else {
      return false;
    }
  }

  logout() {
    this.setToken = '';
  }
}
