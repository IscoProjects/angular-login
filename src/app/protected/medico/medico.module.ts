import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MedicoRoutingModule } from './medico-routing.module';
import { MedHomeComponent } from './pages/med-home/med-home.component';


@NgModule({
  declarations: [
    MedHomeComponent
  ],
  imports: [
    CommonModule,
    MedicoRoutingModule
  ]
})
export class MedicoModule { }
