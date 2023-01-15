import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgendadorRoutingModule } from './agendador-routing.module';
import { AgrHomeComponent } from './pages/agr-home/agr-home.component';


@NgModule({
  declarations: [
    AgrHomeComponent
  ],
  imports: [
    CommonModule,
    AgendadorRoutingModule
  ]
})
export class AgendadorModule { }
