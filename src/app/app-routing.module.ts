import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CopasComponent } from './copas/copas.component';
import { PaisesComponent } from './paises/paises.component';
import { EquipesComponent } from './equipes/equipes.component';
import { JogosComponent } from './jogos/jogos.component';
import { PessoasComponent } from './pessoas/pessoas.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'copas', component: CopasComponent },
  { path: 'paises', component: PaisesComponent },
  { path: 'equipes', component: EquipesComponent },
  { path: 'jogos', component: JogosComponent },
  { path: 'pessoas', component: PessoasComponent }  
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
