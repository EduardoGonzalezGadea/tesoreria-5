import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChequesListarEmitidosComponent } from './cheques-listar-emitidos.component';

describe('ChequesListarEmitidosComponent', () => {
  let component: ChequesListarEmitidosComponent;
  let fixture: ComponentFixture<ChequesListarEmitidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChequesListarEmitidosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChequesListarEmitidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
