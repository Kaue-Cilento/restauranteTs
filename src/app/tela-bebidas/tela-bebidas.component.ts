import { Component, EventEmitter, Output } from '@angular/core';
import { Comida } from '../models/comida.model';

@Component({
  selector: 'app-tela-bebidas',
  templateUrl: './tela-bebidas.component.html',
  styleUrls: ['../tela-inicial/tela-inicial.component.css']
})
export class TelaBebidasComponent {
  @Output() adicionarCarrinhoOutput = new EventEmitter<Comida>(); 

    adicionarAoCarrinho(item: string, preco: number, tipo: string) {
      let comida = new Comida(item, preco, tipo);
      
      this.adicionarCarrinhoOutput.emit(comida)
  }
}
