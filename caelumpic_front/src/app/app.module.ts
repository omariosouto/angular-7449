
import 'rxjs/add/operator/map'

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { ReactiveFormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
//import { FotoComponent } from './foto/foto.component'
import { FotoModule } from './foto/foto.module'
import { PainelModule } from './painel/painel.module'


import { HttpModule } from '@angular/http';
import { ListagemComponent } from './listagem/listagem.component';
import { CadastroComponent } from './cadastro/cadastro.component'
import { Routes, RouterModule } from '@angular/router';
import { roteamento } from './roteamento';
import { Page404Component } from './page404/page404.component';
import { FotoService } from './services/foto.service';
import { BotaoComponent } from './botao/botao.component';


@NgModule({
  declarations: [ // Para Componentes
    AppComponent, ListagemComponent, CadastroComponent, Page404Component, BotaoComponent
  ],
  imports: [ // Para Módulos
    BrowserModule,
    FotoModule,
    HttpModule,
    PainelModule,
    roteamento,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ FotoService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
