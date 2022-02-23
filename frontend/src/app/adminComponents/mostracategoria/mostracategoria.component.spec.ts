import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostracategoriaComponent } from './mostracategoria.component';

describe('MostracategoriaComponent', () => {
  let component: MostracategoriaComponent;
  let fixture: ComponentFixture<MostracategoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostracategoriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MostracategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
