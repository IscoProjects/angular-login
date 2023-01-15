import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { version as uuidVersion } from 'uuid';
import { validate as uuidValidate } from 'uuid';
import { Report } from 'notiflix';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  myLoginForm: FormGroup = this.fb.group({
    us_user: ['', [Validators.required, Validators.required]],
    us_password: ['', [Validators.required, Validators.minLength(6)]],
  });

  get user_auth_info() {
    return this.authService.user;
  }

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {}

  loginValidation() {
    const { us_user, us_password } = this.myLoginForm.value;
    this.authService.loginInspect(us_user, us_password).subscribe((valid) => {
      console.log(valid);

      if (this.uuidValidateV4(valid)) {
        if (this.user_auth_info.role === 'Administrador') {
          console.log('Administrador:', valid);
          this.router.navigateByUrl('/protected-route/admin/pages/dashboard');
        } else if (this.user_auth_info.role === 'Agendador') {
          console.log('Agendador');
          this.router.navigateByUrl('/protected-route/agendador/pages/home');
        } else if (this.user_auth_info.role === 'Medico') {
          console.log('Medico');
          this.router.navigateByUrl('/protected-route/medico/pages/home');
        } else {
          this.router.navigateByUrl('/auth/error');
        }
      } else {
        // this.router.navigateByUrl('/auth/access-denied');
        Report.failure('Unauthorized', valid, 'Regresar');
      }
    });
  }

  uuidValidateV4(uuid: string) {
    return uuidValidate(uuid) && uuidVersion(uuid) === 4;
  }
}
