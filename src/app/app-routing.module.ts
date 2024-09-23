import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabelaDeMusicasComponent } from './tabela-de-musicas/tabela-de-musicas.component';


const routes: Routes = [
  { path: '', redirectTo:'/musicas', pathMatch:'full' },
  { path: 'musicas', component:TabelaDeMusicasComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
