import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuentasPersonalesUiComponent } from './cuentas-personales-ui.component';

describe('CuentasPersonalesUiComponent', () => {
  let component: CuentasPersonalesUiComponent;
  let fixture: ComponentFixture<CuentasPersonalesUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuentasPersonalesUiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CuentasPersonalesUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
