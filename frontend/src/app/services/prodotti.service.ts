import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { LISTAPRODOTTI, LISTAPRODOTTICART } from '../dati/dati.prodotti';
import { Prodotto } from '../model/prodotto.model';

@Injectable({
  providedIn: 'root'
})
export class ProdottiService {

  constructor() { 
  }

  getProdotti() : Observable<Object> {
    return of(LISTAPRODOTTI);
  }

  getCartProdotti() : Observable<Object> {
    return of(LISTAPRODOTTICART);
  }
}


