import { Component, OnInit } from '@angular/core';
import { Prodotto } from '../model/prodotto.model';
import { ProdottiService } from '../services/prodotti.service';

@Component({
  selector: '',
  templateUrl: './prodotti.component.html',
  styleUrls: ['./prodotti.component.css']
})
export class ProdottiComponent implements OnInit {

  listaProdotti : Prodotto[];
  
  constructor(private listaProdottiService : ProdottiService) { }

  ngOnInit(): void {
    this.listaProdottiService.getProdotti().subscribe( (receivedData : any) =>{ //equivalente fetch, subscribe tipo then
      this.listaProdotti = receivedData;
    })
  }

}
