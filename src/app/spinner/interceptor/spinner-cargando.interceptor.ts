import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { SpinnerCargandoService } from '../servicios/spinner-cargando.service';
import { finalize } from 'rxjs/operators';

@Injectable()
export class SpinnerCargandoInterceptor implements HttpInterceptor {

  constructor(private spinnerCargandoService:SpinnerCargandoService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.spinnerCargandoService.showSpinner();
    return next.handle(request).pipe(
      finalize( () => this.spinnerCargandoService.hideSpinner() )
    );
  }
}
