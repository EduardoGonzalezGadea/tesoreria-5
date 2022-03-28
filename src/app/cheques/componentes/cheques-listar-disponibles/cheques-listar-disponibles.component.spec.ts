import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChequesListarDisponiblesComponent } from './cheques-listar-disponibles.component';

describe('ChequesListarDisponiblesComponent', () => {
  let component: ChequesListarDisponiblesComponent;
  let fixture: ComponentFixture<ChequesListarDisponiblesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChequesListarDisponiblesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChequesListarDisponiblesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
