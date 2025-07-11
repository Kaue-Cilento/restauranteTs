import { Component, EventEmitter, Output } from '@angular/core';
import { Comida } from '../models/comida.model';

@Component({
  selector: 'app-tela-combo',
  templateUrl: './tela-combo.component.html',
  styleUrls: ['../tela-inicial/tela-inicial.component.css']
})
export class TelaComboComponent {

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
      let comida = new Comida("Combo Kdelicia", 57.00, "Combos");
      this.comidas.push(comida);

      comida = new Comida("Combo FamiliaK", 68.00, "Combos");
      this.comidas.push(comida);

      comida = new Comida("K Burger", 41.00, "Lanches");
      this.comidas.push(comida);

      comida = new Comida("KatuBurguer", 55.00, "Lanches");
      this.comidas.push(comida);

      comida = new Comida("Batata rustica com cheddar e bacon", 50.00, "Porções(Servem 2 pessoas)");
      this.comidas.push(comida);

      comida = new Comida("Batata fritas", 25.00, "Porções(Servem 2 pessoas)");
      this.comidas.push(comida);

      comida = new Comida("Calabresa e batata frita com cheddar e bacon", 50.00, "Porções(Servem 2 pessoas)");
      this.comidas.push(comida);

      comida = new Comida("Calabresa", 30.00, "Porções(Servem 2 pessoas)");
      this.comidas.push(comida);

      comida = new Comida("Nuggets", 35.00, "Porções(Servem 2 pessoas)");
      this.comidas.push(comida);

      comida = new Comida("Porção Box", 70.00, "Porções(Servem 2 pessoas)");
      this.comidas.push(comida);
    }

    adicionarAoCarrinho(item: string, preco: number, tipo: string) {
      let comida = new Comida(item, preco,tipo);

      this.adicionarCarrinhoOutput.emit(comida)
    }

}
