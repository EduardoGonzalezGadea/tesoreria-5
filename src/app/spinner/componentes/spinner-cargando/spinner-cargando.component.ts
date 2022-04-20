import { Component, OnInit } from '@angular/core';
import { SpinnerCargandoService } from '../../servicios/spinner-cargando.service';

@Component({
  selector: 'app-spinner-cargando',
  templateUrl: './spinner-cargando.component.html',
  styleUrls: ['./spinner-cargando.component.scss']
})
export class SpinnerCargandoComponent implements OnInit {

  isLoading$!: any;

  constructor(private spinnerCargandoService:SpinnerCargandoService) {
    this.isLoading$ = this.spinnerCargandoService.isLoading$;
  }

  ngOnInit(): void {
  }

}
