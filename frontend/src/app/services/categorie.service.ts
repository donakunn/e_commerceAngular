import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Categoria } from '../model/categoria.model';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  serverURL = 'http://localhost:3000';

  constructor(private _http: HttpClient) {
  }

  erroHandler(error: HttpErrorResponse) {
    return throwError(() => error)
  }
  getCategorie(): Observable<Object> {
    return this._http.get(`${this.serverURL}/getCategorie`).pipe(retry(3),catchError(this.erroHandler));
  }

  nuovaCategoria(nuovaCategoria : Categoria): Observable<Object> {
    return this._http.post(`${this.serverURL}/nuovaCat`, {
      nome: nuovaCategoria.nome,
      percorso: nuovaCategoria.percorso,
    }).pipe(retry(3),catchError(this.erroHandler));
  }
  
  cancellaCategoria(idCatDaRimuovere: Categoria): Observable<Object> {
    return this._http.delete(`${this.serverURL}/cancellaCat/${idCatDaRimuovere}`).pipe(retry(3), catchError(this.erroHandler));
  }

  modificaCategoria(CatDaModificare: Categoria): Observable<Object> {
    return this._http.put(`${this.serverURL}/modificaCat/${CatDaModificare.idCategoria}`, {
      nome: CatDaModificare.nome,
      percorso: CatDaModificare.percorso
    }).pipe(retry(3), catchError(this.erroHandler));
  }
}
