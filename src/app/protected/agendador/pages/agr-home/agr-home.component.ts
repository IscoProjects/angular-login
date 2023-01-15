import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-agr-home',
  templateUrl: './agr-home.component.html',
  styleUrls: ['./agr-home.component.css'],
})
export class AgrHomeComponent {
  get user_auth_info() {
    return this.authService.user;
  }

  constructor(private authService: AuthService) {}
}
