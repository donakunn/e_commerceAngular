import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingolacategoriaComponent } from './singolacategoria.component';

describe('SingolacategoriaComponent', () => {
  let component: SingolacategoriaComponent;
  let fixture: ComponentFixture<SingolacategoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingolacategoriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingolacategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
