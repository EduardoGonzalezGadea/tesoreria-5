import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpinnerCargandoComponent } from './spinner-cargando.component';

describe('SpinnerCargandoComponent', () => {
  let component: SpinnerCargandoComponent;
  let fixture: ComponentFixture<SpinnerCargandoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpinnerCargandoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpinnerCargandoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
