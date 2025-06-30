import { Component } from '@angular/core';

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
}

// [] ts -> html
// () html -> ts