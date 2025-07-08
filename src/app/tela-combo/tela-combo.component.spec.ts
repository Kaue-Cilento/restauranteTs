import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaComboComponent } from './tela-combo.component';

describe('TelaComboComponent', () => {
  let component: TelaComboComponent;
  let fixture: ComponentFixture<TelaComboComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TelaComboComponent]
    });
    fixture = TestBed.createComponent(TelaComboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
