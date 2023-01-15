import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TokenVerifyGuard } from './guards/token-verify.guard';
import { PageNotFoundComponent } from './auth/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'protected-route',
    loadChildren: () =>
      import('./protected/protected.module').then((m) => m.ProtectedModule),
    canActivate: [TokenVerifyGuard],
    canLoad: [TokenVerifyGuard],
  },
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
