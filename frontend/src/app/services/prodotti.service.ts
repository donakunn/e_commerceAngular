import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, retry, throwError } from 'rxjs';
import { Prodotto } from '../model/prodotto.model';


@Injectable({
  providedIn: 'root'
})

export class ProdottiService {
  serverURL = 'http://localhost:3000';

  constructor(private _http: HttpClient) { 
  }

  erroHandler(error: HttpErrorResponse) {
    return throwError(() => error)
  }

  getProdotti(): Observable<Object> {
    return this._http.get(`${this.serverURL}/getProdotti`).pipe(retry(3),catchError(this.erroHandler));
  }
  getCartProdotti(): Observable<Object> {
    return this._http.get(`${this.serverURL}/getProdotti`).pipe(retry(3),catchError(this.erroHandler));
  }

  getProdottiPerCategoria(idCategoria : string): Observable<Object> {
    return this._http.get(`${this.serverURL}/getProdotti/${idCategoria}`).pipe(retry(3),catchError(this.erroHandler));
  }

  nuovoProdotto(nuovoProdotto : Prodotto): Observable<Object> {
    return this._http.post(`${this.serverURL}/nuovoProd`, {
      nome: nuovoProdotto.nome,
      categoria : nuovoProdotto.categoria,
      percorso: nuovoProdotto.percorso,
      prezzo : nuovoProdotto.prezzo
    }).pipe(retry(3),catchError(this.erroHandler));
  }

  cancellaProdotto(idProdDaRimuovere: Prodotto): Observable<Object> {
    return this._http.delete(`${this.serverURL}/cancellaProd/${idProdDaRimuovere}`).pipe(retry(3),catchError(this.erroHandler));
  }

  modificaProdotto(ProdDaModificare: Prodotto): Observable<Object> {
    return this._http.put(`${this.serverURL}/modificaProd/${ProdDaModificare.idProdotto}`, {
      nome: ProdDaModificare.nome,
      categoria : ProdDaModificare.categoria,
      percorso: ProdDaModificare.percorso,
      prezzo : ProdDaModificare.prezzo
    }).pipe(retry(3),catchError(this.erroHandler));
  }

  cancellaProdottiPerCategoria(idCategoria: string): Observable<Object> {
    return this._http.delete(`${this.serverURL}/cancellaTuttiProd/${idCategoria}`).pipe(retry(3),catchError(this.erroHandler));
  }
}


