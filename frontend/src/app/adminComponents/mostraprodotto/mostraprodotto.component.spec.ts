import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostraprodottoComponent } from './mostraprodotto.component';

describe('MostraprodottoComponent', () => {
  let component: MostraprodottoComponent;
  let fixture: ComponentFixture<MostraprodottoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostraprodottoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MostraprodottoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
