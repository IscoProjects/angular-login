import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of, tap } from 'rxjs';
import { AuthResponse, User } from '../interfaces/auth.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _user!: User;

  get user() {
    return { ...this._user };
  }

  constructor(private http: HttpClient) {}

  loginInspect(us_user: string, us_password: string) {
    const url = 'http://localhost:3000/api/usuario/login';
    const body_query = { us_user, us_password };
    return this.http.post<AuthResponse>(url, body_query).pipe(
      tap((resp) => {
        console.log(resp);

        if (resp.ok) {
          localStorage.setItem('token', resp.token!);
          this._user = {
            id: resp.id_usuario!,
            role: resp.us_role!,
          };
        }
      }),
      map((resp) => resp.id_usuario),
      catchError((error) => of(error.error.message))
    );
  }

  tokenValidation(): Observable<boolean> {
    const url = 'http://localhost:3000/api/usuario/status-verify';
    const x_token = `Bearer ${localStorage.getItem('token')}`;
    const headers = new HttpHeaders().set('Authorization', x_token || '');
    return this.http.get<AuthResponse>(url, { headers }).pipe(
      map((resp) => {
        console.log(headers);
        localStorage.setItem('token', resp.token!);
        this._user = {
          id: resp.id_usuario!,
          role: resp.us_role!,
        };
        console.log(resp);
        return resp.ok;
      }),
      catchError((err) => of(false))
    );
  }
}
