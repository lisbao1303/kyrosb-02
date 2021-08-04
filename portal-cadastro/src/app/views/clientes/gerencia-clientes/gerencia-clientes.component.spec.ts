import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerenciaClientesComponent } from './gerencia-clientes.component';

describe('GerenciaClientesComponent', () => {
  let component: GerenciaClientesComponent;
  let fixture: ComponentFixture<GerenciaClientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GerenciaClientesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GerenciaClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
