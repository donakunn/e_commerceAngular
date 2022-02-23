import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreacategoriaComponent } from './creacategoria.component';

describe('CreacategoriaComponent', () => {
  let component: CreacategoriaComponent;
  let fixture: ComponentFixture<CreacategoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreacategoriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreacategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
