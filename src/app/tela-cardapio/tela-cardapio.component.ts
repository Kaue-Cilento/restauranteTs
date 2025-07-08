import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Comida } from '../models/comida.model';

@Component({
  selector: 'app-tela-cardapio',
  templateUrl: './tela-cardapio.component.html',
  styleUrls: ['../tela-inicial/tela-inicial.component.css']
})


export class TelaCardapioComponent implements OnInit {
  comidas: Comida[] = [];
  menusTipoComida: any[] = [];
  @Output() adicionarCarrinhoOutput = new EventEmitter<Comida>();  

  ngOnInit() {
    this.adicionarComidas();
    
    //Cria uma array com todos os tipos, no caso, Entrada, Pratos Principais e Sobremesas
    let tiposComida: any[] = Array.from(
      new Set(this.comidas.map((o) => o.tipo))
    );

    //Cria 3 arrays, uma para cada tipo de comida, e as adiciona a menusTipoComida
    for (let tipo of tiposComida){
      let comidasDesseTipo = this.comidas.filter(c => c.tipo == tipo)
      this.menusTipoComida.push(comidasDesseTipo)
    }

    console.log(this.menusTipoComida)
  }

  adicionarComidas(){
    let comida = new Comida("Bruschetta", 14.00, "entrada");
    this.comidas.push(comida);

    comida = new Comida("Salada Caprese", 20.00, "entrada");
    this.comidas.push(comida);

    comida = new Comida("Lasanha a bolonhesa", 45.00, "prato");
    this.comidas.push(comida);

    comida = new Comida("Pudim", 10.00, "sobremesa");
    this.comidas.push(comida);

    comida = new Comida("Torta de limao", 15.00, "sobremesa");
    this.comidas.push(comida);

    comida = new Comida("Pettit gatteu", 20.00, "sobremesa");
    this.comidas.push(comida);
  }

  adicionarAoCarrinho(item: string, preco: number, tipo: string) {
    let comida = new Comida(item, preco,tipo);

    this.adicionarCarrinhoOutput.emit(comida)
  }
}


