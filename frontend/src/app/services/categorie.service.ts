import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Categoria } from '../model/categoria.model';
import { of, ReplaySubject } from 'rxjs';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {
  
  serverURL = 'http://localhost:3000';

  constructor(private _http:HttpClient) {
  }

  getCategorie() : Observable<Object> {
    return this._http.get(`${this.serverURL}/getCategorie`);
    // return this.listaCategorie;
  }

  insertCategoria(nuovaCat : Categoria) : Observable<any> {
    return this._http.post(this.serverURL + '/nuovaCat', nuovaCat);
  } 
}
