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
  listaCategorie : ReplaySubject<Categoria[]> = new ReplaySubject();

  constructor(private _http:HttpClient) { 
  
    this._http.get<{result: Categoria[]}>(this.serverURL + '/getCategorie').subscribe((data) => {
      this.listaCategorie.next(data.result);
    });
  }

  getCategorie() : Observable<Object> {
    return this.listaCategorie;
  }

  insertCategoria(nuovaCat : Categoria) : Observable<any> {
    return this._http.post(this.serverURL + '/nuovaCat', nuovaCat);
  } 
}
