import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticuladoUiComponent } from './articulado-ui.component';

describe('ArticuladoUiComponent', () => {
  let component: ArticuladoUiComponent;
  let fixture: ComponentFixture<ArticuladoUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticuladoUiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticuladoUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
