import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Token } from '../types/token';

@Injectable()
export class AuthService {

  private authToken: string;

  public set token(value: string) {
    this.authToken = value;
  }

  public get token(): string {
    return this.authToken;
  }

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<Token> {
    return this.http.post<Token>('http://localhost:3000/api/login', { email, password });
  }

  getCustomerDetails() {
    return this.http.get('http://localhost:3000/customers/details');
  }

}
