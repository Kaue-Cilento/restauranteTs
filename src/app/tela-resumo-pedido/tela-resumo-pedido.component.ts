import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ItemCarrinho } from '../models/item-carrinho.model';

@Component({
  selector: 'app-tela-resumo-pedido',
  templateUrl: './tela-resumo-pedido.component.html',
  styleUrls: ['../tela-inicial/tela-inicial.component.css']
})
export class TelaResumoPedidoComponent {

  @Input() resumoCarrinho: ItemCarrinho [] = []
  @Output() confirmarPagamento = new EventEmitter<void>();

    telaAtual = "resumoPedido";

  definirTelaInicial(telaNome: string) {
    this.telaAtual = telaNome;
  }

  calcularTotal(): number {
    return this.resumoCarrinho.reduce(
      (total, item) => total + item.comida.preco * item.quantidade,
      0
    );
  }

 pagarAgora() {
  this.confirmarPagamento.emit(); // avisa o pai para trocar a tela
  this.telaAtual = 'pagamento';
  }
}



