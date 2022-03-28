import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuentasPersonalesEditarComponent } from './cuentas-personales-editar.component';

describe('CuentasPersonalesEditarComponent', () => {
  let component: CuentasPersonalesEditarComponent;
  let fixture: ComponentFixture<CuentasPersonalesEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuentasPersonalesEditarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CuentasPersonalesEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
