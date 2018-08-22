import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { CopasComponent } from './copas/copas.component';
import { PaisesComponent } from './paises/paises.component';
import { EquipesComponent } from './equipes/equipes.component';
import { JogosComponent } from './jogos/jogos.component';
import { PessoasComponent } from './pessoas/pessoas.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    CopasComponent,
    PaisesComponent,
    EquipesComponent,
    JogosComponent,
    PessoasComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

  

}
