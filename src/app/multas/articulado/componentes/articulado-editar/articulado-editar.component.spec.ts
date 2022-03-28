import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticuladoEditarComponent } from './articulado-editar.component';

describe('ArticuladoEditarComponent', () => {
  let component: ArticuladoEditarComponent;
  let fixture: ComponentFixture<ArticuladoEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticuladoEditarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticuladoEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
