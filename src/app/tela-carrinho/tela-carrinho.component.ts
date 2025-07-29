import { Component, Input, OnChanges, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { ItemCarrinho } from '../models/item-carrinho.model';

@Component({
  selector: 'app-tela-carrinho',
  templateUrl: './tela-carrinho.component.html',
  styleUrls: ['../tela-inicial/tela-inicial.component.css']
})
export class TelaCarrinhoComponent implements OnChanges {

  @Input() itensCarrinhoInput: ItemCarrinho[] = [];
  @Output() carrinhoAtualizado = new EventEmitter<ItemCarrinho[]>();

  carrinho: ItemCarrinho[] = [];
  pedidoFechado: ItemCarrinho[] = [];

  telaAtual = "carrinho";

  definirTelaInicial(telaNome: string) {
    this.telaAtual = telaNome;
  }

  fecharPedido() {
    this.pedidoFechado = [...this.carrinho];
    this.telaAtual = 'resumoPedido';
  }

  irParaPagamento() {
  this.telaAtual = 'pagamento';
}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['itensCarrinhoInput']) {
      this.carrinho = [...this.itensCarrinhoInput];
    }
  }

  aumentarQuantidade(index: number): void {
    this.carrinho[index].quantidade++;
    this.emitirCarrinhoAtualizado();
  }

  diminuirQuantidade(index: number): void {
    if (this.carrinho[index].quantidade > 1) {
      this.carrinho[index].quantidade--;
    } else {
      this.carrinho.splice(index, 1);
    }
    this.emitirCarrinhoAtualizado();
  }

  emitirCarrinhoAtualizado(): void {
    this.carrinhoAtualizado.emit([...this.carrinho]);
  }

  calcularTotal(): number {
    return this.carrinho.reduce((total, item) => total + item.comida.preco * item.quantidade, 0);
  }

  calcularSubtotal(): number {
  let total = 0;
  for (let item of this.itensCarrinhoInput) {
    total += item.comida.preco * item.quantidade;
  }
  return total;
}
}
