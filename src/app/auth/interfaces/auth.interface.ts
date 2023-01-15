export interface AuthResponse {
  ok: boolean;
  id_usuario?: string;
  us_role?: string;
  us_user?: string;
  us_password?: string;
  token?: string;
}

export interface User {
  id: string;
  role: string;
}
