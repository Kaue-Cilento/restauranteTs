export class Comida {
    nome: string;
    preco: number;
    tipo: string;

    constructor(nome: string, preco: number, tipo: string) {
        this.nome = nome;
        this.preco = preco;
        this.tipo = tipo;
    }
}