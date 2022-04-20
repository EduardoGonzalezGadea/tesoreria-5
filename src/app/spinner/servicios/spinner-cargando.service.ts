import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerCargandoService {

  isLoading$ = new Subject<boolean>();

  constructor() { }

  showSpinner(): void {
    this.isLoading$.next(true);
  }

  hideSpinner(): void {
    this.isLoading$.next(false);
  }
  
}
