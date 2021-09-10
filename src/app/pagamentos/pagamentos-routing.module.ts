import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MensalidadesComponent } from './mensalidades/mensalidades.component';
import { PagamentosComponent } from './pagamentos.component';

const routes: Routes = [
  { path: '', component: PagamentosComponent },
  { path: 'mensalidades', component: MensalidadesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagamentosRoutingModule {}
