import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DOCUMENT } from '@angular/common';

import { ArticuladoModel } from '../modelos/articulado.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticuladoService {

  url: string = "";

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

  verTodos(): Observable<ArticuladoModel[]> {
    return this.httpClient.get<ArticuladoModel[]>(this.url + 'articulado/articulado.php');
  }

  verUno(id: number): Observable<ArticuladoModel[]> {
    return this.httpClient.get<ArticuladoModel[]>(this.url + 'articulado/articulado.php?id=' + id);
  }

  crear(data: any): Observable<any> {
    return this.httpClient.post<any>(this.url + 'articulado/articulado.php', data);
  }

  editar(id: number, data: any): Observable<any> {
    let tempData:string[] = [];
    tempData.push(id.toString());
    tempData.push(data);
    return this.httpClient.put<any>(this.url + 'articulado/articulado.php', tempData);
  }

  borrar(id: number): Observable<any> {
    return this.httpClient.put<any>(this.url + 'articulado/articulado.php', id);
  }

  cargarTraduccion() {
    return this.httpClient.get<any>('assets/datatables/es-ar.json');
  }

}
