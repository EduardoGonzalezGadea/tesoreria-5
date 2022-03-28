import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticuladoBorrarComponent } from './articulado-borrar.component';

describe('ArticuladoBorrarComponent', () => {
  let component: ArticuladoBorrarComponent;
  let fixture: ComponentFixture<ArticuladoBorrarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticuladoBorrarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticuladoBorrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
