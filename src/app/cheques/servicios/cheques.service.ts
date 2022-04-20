import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DOCUMENT } from '@angular/common';

import { ChequesModel } from '../modelos/cheques-model';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChequesService {

  private url: string = "";

  emitirID: number | null = null;
  private emitirID$ = new Subject<number | null>();

  constructor(
    private httpClient: HttpClient,
    @Inject(DOCUMENT) document: any
  ) {
    const servidor = document.location.host;
    if(servidor == 'localhost:4200') {
      this.url = 'http://localhost/apites/';
    } else {
      this.url = 'http://' + servidor + '/apites/';
    }
  }

  verDisponibles(): Observable<ChequesModel[]> {
    return this.httpClient.get<ChequesModel[]>(this.url + 'cheques/cheques.php?active');
  }

  verEmitidos(): Observable<ChequesModel[]> {
    return this.httpClient.get<ChequesModel[]>(this.url + 'cheques/cheques.php?emitidos=true');
  }

  verUno(id: number | null = this.emitirID): Observable<ChequesModel[]> {
    return this.httpClient.get<ChequesModel[]>(this.url + 'cheques/cheques.php?id=' + id);
  }

  onEmitir(id: number | null) {
    this.emitirID = id;
    this.emitirID$.next(this.emitirID);
  }

  getEmitirID$(): Observable<number | null> {
    return this.emitirID$.asObservable();
  }

}
