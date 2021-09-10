import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlunoComponent } from './aluno/aluno.component';
import { CadastroComponent } from './cadastro.component';

const routes: Routes = [
  { path: '', component: CadastroComponent },
  { path: 'aluno', component: AlunoComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastroRoutingModule {}
