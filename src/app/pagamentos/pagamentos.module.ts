import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagamentosRoutingModule } from './pagamentos-routing.module';
import { PagamentosComponent } from './pagamentos.component';
import { MensalidadesComponent } from './mensalidades/mensalidades.component';


@NgModule({
  declarations: [
    PagamentosComponent,
    MensalidadesComponent
  ],
  imports: [
    CommonModule,
    PagamentosRoutingModule
  ]
})
export class PagamentosModule { }
