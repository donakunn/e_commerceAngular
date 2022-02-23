import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingoloprodottoComponent } from './singoloprodotto.component';

describe('SingoloprodottoComponent', () => {
  let component: SingoloprodottoComponent;
  let fixture: ComponentFixture<SingoloprodottoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingoloprodottoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingoloprodottoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
