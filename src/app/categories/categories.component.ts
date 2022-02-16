import { Component, OnInit } from '@angular/core';
import { LISTACATEGORIE } from '../dati/dati.categorie';
import { Categoria } from '../model/categoria.model';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  listaCategorie : Categoria[] = LISTACATEGORIE;
  
  constructor() {}

  ngOnInit(): void {
  }

}
