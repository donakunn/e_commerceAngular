import { Component, OnInit } from '@angular/core';
import { Prodotto } from '../model/prodotto.model';
import { ProdottiService } from '../services/prodotti.service';

@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  listaProdotti : Prodotto[];

  constructor(private listaProdottiService : ProdottiService) {

   }

  ngOnInit(): void {
    this.listaProdottiService.getCartProdotti().subscribe( (receivedData : any) =>{ 
      this.listaProdotti = receivedData;
    })
  }

  calcolaTotale() : number{
    let totale : number = 0;
    for(let prodotto of this.listaProdotti) {
      totale += prodotto.prezzo;
    }   
    return totale;
  }

}
