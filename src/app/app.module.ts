import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TelaInicialComponent } from './tela-inicial/tela-inicial.component';
import { FormsModule } from '@angular/forms';
import { TelaCardapioComponent } from './tela-cardapio/tela-cardapio.component';
import { TelaBebidasComponent } from './tela-bebidas/tela-bebidas.component';
import { TelaComboComponent } from './tela-combo/tela-combo.component';
import { TelaCarrinhoComponent } from './tela-carrinho/tela-carrinho.component';

@NgModule({
  declarations: [
    AppComponent,
    TelaInicialComponent,
    TelaCardapioComponent,
    TelaBebidasComponent,
    TelaComboComponent,
    TelaCarrinhoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
