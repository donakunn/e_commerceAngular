import { Component, OnInit } from '@angular/core';
import { Categoria } from '../model/categoria.model';
import { CategorieService } from '../services/categorie.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  listaCategorie : Categoria[];
  
  constructor(private listaCategorieService : CategorieService) {

  }

  ngOnInit(): void {

    this.listaCategorieService.getCategorie().subscribe( (receivedData : any) =>{ 
    this.listaCategorie = receivedData;
    console.log(this.listaCategorie);

    
    })
  }

  

}
