import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TelaInicialComponent } from './tela-inicial/tela-inicial.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TelaCardapioComponent } from './tela-cardapio/tela-cardapio.component';
import { TelaBebidasComponent } from './tela-bebidas/tela-bebidas.component';
import { TelaComboComponent } from './tela-combo/tela-combo.component';
import { TelaCarrinhoComponent } from './tela-carrinho/tela-carrinho.component';
import { TelaResumoPedidoComponent } from './tela-resumo-pedido/tela-resumo-pedido.component';
import { TelaPagamentoComponent } from './tela-pagamento/tela-pagamento.component';

@NgModule({
  declarations: [
    AppComponent,
    TelaInicialComponent,
    TelaCardapioComponent,
    TelaBebidasComponent,
    TelaComboComponent,
    TelaCarrinhoComponent,
    TelaResumoPedidoComponent,
    TelaPagamentoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
