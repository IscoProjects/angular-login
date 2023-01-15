import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MedHomeComponent } from './pages/med-home/med-home.component';
import { PageNotFoundComponent } from '../../auth/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: 'pages',
    children: [
      {
        path: 'home',
        component: MedHomeComponent,
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: '**',
        component: PageNotFoundComponent,
      },
    ],
  },
  {
    path: '',
    redirectTo: 'pages',
    pathMatch: 'full',
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MedicoRoutingModule {}
