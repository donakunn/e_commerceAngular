import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrautentiComponent } from './mostrautenti.component';

describe('MostrautentiComponent', () => {
  let component: MostrautentiComponent;
  let fixture: ComponentFixture<MostrautentiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostrautentiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrautentiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
