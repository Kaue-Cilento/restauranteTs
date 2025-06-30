import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaBebidasComponent } from './tela-bebidas.component';

describe('TelaBebidasComponent', () => {
  let component: TelaBebidasComponent;
  let fixture: ComponentFixture<TelaBebidasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TelaBebidasComponent]
    });
    fixture = TestBed.createComponent(TelaBebidasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
