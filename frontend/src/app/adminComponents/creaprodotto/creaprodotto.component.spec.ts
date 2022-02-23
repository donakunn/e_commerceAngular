import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreaprodottoComponent } from './creaprodotto.component';

describe('CreaprodottoComponent', () => {
  let component: CreaprodottoComponent;
  let fixture: ComponentFixture<CreaprodottoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreaprodottoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreaprodottoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
