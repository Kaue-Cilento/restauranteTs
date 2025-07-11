import { Comida } from "./comida.model";

export class ItemCarrinho {
    comida: Comida;
    quantidade: number;

    constructor(comida: Comida, quantidade: number) {
        this.comida = comida;
        this.quantidade = quantidade;
    }
}

