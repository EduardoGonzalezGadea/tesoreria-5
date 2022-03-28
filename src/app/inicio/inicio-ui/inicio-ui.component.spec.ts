import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioUiComponent } from './inicio-ui.component';

describe('InicioUiComponent', () => {
  let component: InicioUiComponent;
  let fixture: ComponentFixture<InicioUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InicioUiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InicioUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
