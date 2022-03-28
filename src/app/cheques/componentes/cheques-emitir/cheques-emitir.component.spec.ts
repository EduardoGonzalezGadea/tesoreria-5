import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChequesEmitirComponent } from './cheques-emitir.component';

describe('ChequesEmitirComponent', () => {
  let component: ChequesEmitirComponent;
  let fixture: ComponentFixture<ChequesEmitirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChequesEmitirComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChequesEmitirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
