import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticuladoNuevoComponent } from './articulado-nuevo.component';

describe('ArticuladoNuevoComponent', () => {
  let component: ArticuladoNuevoComponent;
  let fixture: ComponentFixture<ArticuladoNuevoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticuladoNuevoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticuladoNuevoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
