import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    console.log(this.isAuthenticated());
  }

  isAuthenticated(): boolean {
    return this.authService.isAuthenticated();
  }

  signIn(): void {
    this.router.navigateByUrl('/login');
  }

  signOut() {
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }
}
