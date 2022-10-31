import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { CadastrarComponent } from './componets/cadastrar/cadastrar.component';
import { ExcluirComponent } from './componets/excluir/excluir.component';
import { PesquisarComponent } from './componets/pesquisar/pesquisar.component'

@NgModule({
  declarations: [
    AppComponent,
    CadastrarComponent,
    ExcluirComponent,
    PesquisarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
