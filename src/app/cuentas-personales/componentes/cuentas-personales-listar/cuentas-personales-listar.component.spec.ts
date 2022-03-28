import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuentasPersonalesListarComponent } from './cuentas-personales-listar.component';

describe('CuentasPersonalesListarComponent', () => {
  let component: CuentasPersonalesListarComponent;
  let fixture: ComponentFixture<CuentasPersonalesListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuentasPersonalesListarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CuentasPersonalesListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
