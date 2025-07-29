import { Component, EventEmitter, Output } from '@angular/core';
import { Comida } from '../models/comida.model';

@Component({
  selector: 'app-tela-bebidas',
  templateUrl: './tela-bebidas.component.html',
  styleUrls: ['../tela-inicial/tela-inicial.component.css']
})
export class TelaBebidasComponent {
  comidas: Comida[] = [];
  menusTipoComida: any[] = [];
  telaAtual = "carrinho";
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
    let comida = new Comida("Guarana/Zero", 8.00, "Bebidas");
    this.comidas.push(comida);

    comida = new Comida("H20/Limoneto", 9.00, "Bebidas");
    this.comidas.push(comida);

    comida = new Comida("Coca Cola/Zero", 10.00, "Bebidas");
    this.comidas.push(comida);

    comida = new Comida("Suco de morango", 15.00, "Bebidas");
    this.comidas.push(comida);

    comida = new Comida("Suco de maracuja", 16.00, "Bebidas");
    this.comidas.push(comida);

    comida = new Comida("Suco de laranja", 15.00, "Bebidas");
    this.comidas.push(comida);
  }

  adicionarAoCarrinho(item: string, preco: number, tipo: string) {
    let comida = new Comida(item, preco,tipo);

    this.adicionarCarrinhoOutput.emit(comida)
  }
}
