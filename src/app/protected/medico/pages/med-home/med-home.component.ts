import { Component } from '@angular/core';
import { AuthService } from '../../../../auth/services/auth.service';

@Component({
  selector: 'app-med-home',
  templateUrl: './med-home.component.html',
  styleUrls: ['./med-home.component.css'],
})
export class MedHomeComponent {
  get user_auth_info() {
    return this.authService.user;
  }

  constructor(private authService: AuthService) {}
}
