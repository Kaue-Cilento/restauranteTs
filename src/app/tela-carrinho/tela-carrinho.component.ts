import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ItemCarrinho } from '../models/item-carrinho.model';

@Component({
  selector: 'app-tela-carrinho',
  templateUrl: './tela-carrinho.component.html',
  styleUrls: ['../tela-inicial/tela-inicial.component.css']
})
export class TelaCarrinhoComponent implements OnChanges{
  @Input() itensCarrinhosInput: ItemCarrinho[] = [];

  ngOnChanges() {
    //ativa quando acontece uma mudança em algum input
  }
}
