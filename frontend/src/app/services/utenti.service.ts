import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { Utente } from '../model/utente.model';

@Injectable({
  providedIn: 'root'
})
export class UtentiService {

  serverURL = 'http://localhost:3000';

  constructor(private _http: HttpClient) {
  }

  erroHandler(error: HttpErrorResponse) {
    return throwError(() => error)
  }

  getUtente(idUtente: string): Observable<Object> {
    return this._http.get(`${this.serverURL}/getUtente/${idUtente}`).pipe(retry(3), catchError(this.erroHandler));
  }

  getUtentiAff(affidabile: boolean): Observable<Object> {
    return this._http.get(`${this.serverURL}/getUtenti/${affidabile}`).pipe(retry(3), catchError(this.erroHandler));
  }

  registrati(nuovoUtente: Utente): Observable<Object> {
    return this._http.post(`${this.serverURL}/registrati`, {
      nome: nuovoUtente.nome,
      cognome: nuovoUtente.cognome,
      email: nuovoUtente.email,
      password: nuovoUtente.password,
      partitaiva: nuovoUtente.piva,
      nazione: nuovoUtente.nazione,
      via: nuovoUtente.via,
      comune: nuovoUtente.comune,
      cap: nuovoUtente.cap,
      provincia: nuovoUtente.provincia,
      telefono: nuovoUtente.telefono,
      username: nuovoUtente.username,
      codFiscale: nuovoUtente.codfiscale,
    }).pipe(retry(3), catchError(this.erroHandler));
  }

  cambiaAff(idUtente: Utente, nuovaAff: boolean): Observable<Object> {
    return this._http.put(`${this.serverURL}/cambiaAff/${idUtente}`, {
      affidabilita: nuovaAff
    }).pipe(retry(3), catchError(this.erroHandler));
  }

  cancellaUtente(idUtente: Utente): Observable<Object> {
    return this._http.delete(`${this.serverURL}/cancellaUt/${idUtente}`)
  }
  modificaUtente(UtenteDaModificare: Utente): Observable<Object> {
    return this._http.put(`${this.serverURL}/modificaUt/${UtenteDaModificare.idUtente}`, {
      nome: UtenteDaModificare.nome,
      cognome: UtenteDaModificare.cognome,
      email: UtenteDaModificare.email,
      password: UtenteDaModificare.password,
      partitaiva: UtenteDaModificare.piva,
      nazione: UtenteDaModificare.nazione,
      via: UtenteDaModificare.via,
      comune: UtenteDaModificare.comune,
      cap: UtenteDaModificare.cap,
      provincia: UtenteDaModificare.provincia,
      telefono: UtenteDaModificare.telefono,
      username: UtenteDaModificare.username,
      codFiscale: UtenteDaModificare.codfiscale,
    }).pipe(retry(3), catchError(this.erroHandler));
  }
}
