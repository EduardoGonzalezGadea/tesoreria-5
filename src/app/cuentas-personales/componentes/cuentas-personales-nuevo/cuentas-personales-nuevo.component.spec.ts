import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuentasPersonalesNuevoComponent } from './cuentas-personales-nuevo.component';

describe('CuentasPersonalesNuevoComponent', () => {
  let component: CuentasPersonalesNuevoComponent;
  let fixture: ComponentFixture<CuentasPersonalesNuevoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuentasPersonalesNuevoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CuentasPersonalesNuevoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
