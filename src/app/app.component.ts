import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Papros';
  constructor(public authService: AuthService) {
    this.authService.login({}).subscribe(data => {
      console.log(data);
    });
  }

  getCustomerDetails() {
    this.authService.getCustomerDetails().subscribe((data) => {
      console.log('----->>>', data);
    });
  }
}
