import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticuladoListarComponent } from './articulado-listar.component';

describe('ArticuladoListarComponent', () => {
  let component: ArticuladoListarComponent;
  let fixture: ComponentFixture<ArticuladoListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticuladoListarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticuladoListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
