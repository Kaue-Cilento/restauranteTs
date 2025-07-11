import { Component } from '@angular/core';
import { ItemCarrinho } from '../models/item-carrinho.model';
import { Comida } from '../models/comida.model';

@Component({
  selector: 'app-tela-inicial',
  templateUrl: './tela-inicial.component.html',
  styleUrls: ['./tela-inicial.component.css']
})
export class TelaInicialComponent {

  texto: string = '';
  nome: string = '';
  link: string = 'https://www.restauranteKdelicia.com.br';
  clicou: boolean = false;
  itensCarrinho: ItemCarrinho[] = [];
  quantidadeCarrinho: number = 0;

  telaAtual = "cardapio";

  clicar(nome: string) { 
    this.link = "https://www." + nome + ".com.br";
    this.texto = "RestauranteKdelicias";
    this.clicou = true;
  }

  redirecionar(){
    //window.location.href = this.link;
    window.open(this.link, '_blank');
  }

  definirTelaInicial(telaNome: string){
    this.telaAtual = telaNome
  }

  adicionarAoCarrinho($event: Comida){
    let comidaExistente = this.itensCarrinho.find(i => i.comida.nome == $event.nome)
    if (comidaExistente){
      comidaExistente.quantidade++ 
    }
    else{
      let item = new ItemCarrinho($event, 1);
      this.itensCarrinho.push(item);
    }
    this.quantidadeCarrinho++
  }
}

// [] ts -> html
// () html -> ts
