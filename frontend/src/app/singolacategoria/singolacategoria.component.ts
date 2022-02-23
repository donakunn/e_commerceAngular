import { Component, Input, OnInit } from '@angular/core';
import { Categoria } from '../model/categoria.model';

@Component({
  selector: 'singolacategoria',
  templateUrl: './singolacategoria.component.html',
  styleUrls: ['./singolacategoria.component.css']
})
export class SingolacategoriaComponent implements OnInit {

  @Input() categoria : Categoria;
  
  constructor() { }

  ngOnInit(): void { console.log(this.categoria);
  
  }

}
