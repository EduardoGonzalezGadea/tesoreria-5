import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DOCUMENT } from '@angular/common';

import { CuentasPersonalesModel } from '../modelos/cuentas-personales-model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CuentasPersonalesService {

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

  verTodos(): Observable<CuentasPersonalesModel[]> {
    return this.httpClient.get<CuentasPersonalesModel[]>(this.url + 'cuentas-personales/cuentas-personales.php');
  }

  verUno(id: number): Observable<CuentasPersonalesModel[]> {
    return this.httpClient.get<CuentasPersonalesModel[]>(this.url + 'cuentas-personales/cuentas-personales.php?id=' + id);
  }

  verFinancieras(): Observable<CuentasPersonalesModel[]> {
    return this.httpClient.get<CuentasPersonalesModel[]>(this.url + 'cuentas-personales/cuentas-personales.php?financieras');
  }

  editar(id: number, data: any): Observable<any> {
    let tempData:string[] = [];
    tempData.push(id.toString());
    tempData.push(data);
    return this.httpClient.put<any>(this.url + 'cuentas-personales/cuentas-personales.php', tempData);
  }

  nuevo(data: any): Observable<any> {
    let tempData:string[] = [];
    tempData.push(data);
    return this.httpClient.post<any>(this.url + 'cuentas-personales/cuentas-personales.php', tempData);
  }

  borrar(id: number | null): Observable<any> {
    return this.httpClient.delete<any>(this.url + 'cuentas-personales/cuentas-personales.php?id=' + id);
  }

}
