import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaResumoPedidoComponent } from './tela-resumo-pedido.component';

describe('TelaResumoPedidoComponent', () => {
  let component: TelaResumoPedidoComponent;
  let fixture: ComponentFixture<TelaResumoPedidoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TelaResumoPedidoComponent]
    });
    fixture = TestBed.createComponent(TelaResumoPedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
