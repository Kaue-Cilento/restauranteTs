import { Component, EventEmitter, Input, NgModule, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-tela-pagamento',
  templateUrl: './tela-pagamento.component.html',
  styleUrls: ['../tela-inicial/tela-inicial.component.css']
})
export class TelaPagamentoComponent implements OnInit{

  formulario!:FormGroup;

  pagamento = {
  formaPagamento: null,
  nome: '',
  cpf:'',
  cep:'',
  rua:'',
  numero:'',
  bairro:'',
  uf:'',
  nomeCartao:'',
  numeroCartao:'',
  validade:'',
  cvv:'',

  option: ''
};

constructor(private formBuilder: FormBuilder) {}

ngOnInit():void {
  this.formulario = this.formBuilder.group({
     formaPagamento: [null, Validators.required],
      nome: ['', Validators.required],
      cpf: ['', Validators.required],
      cep: [''],
      rua: [''],
      numero: [''],
      bairro: [''],
      uf: [''],
      nomeCartao: [''],
      numeroCartao: [''],
      validade: [''],
      cvv: [''],
      option: [null, Validators.required]
  });
}

submit(): void {
  if ( this.formulario.valid) {
     alert("Pagamento realizado com sucesso!");
      console.log("Dados enviados:", this.pagamento);
  } else {
    alert("Preencha todos os campos obrigatórios!");
  }
}

copiado = false;

copiarPix(texto: string) {
  navigator.clipboard.writeText(texto).then(() => {
    this.copiado = true;
    setTimeout(() => this.copiado = false, 2000); // mensagem some depois de 2s
  }).catch(() => {
    alert('Não foi possível copiar!');
  });
}
}

