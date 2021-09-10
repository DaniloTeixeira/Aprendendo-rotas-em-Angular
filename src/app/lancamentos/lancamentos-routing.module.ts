import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LancamentosComponent } from './lancamentos.component';
import { NotasComponent } from './notas/notas.component';

const routes: Routes = [
  { path: '', component: LancamentosComponent },
  { path: 'notas', component: NotasComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LancamentosRoutingModule {}
