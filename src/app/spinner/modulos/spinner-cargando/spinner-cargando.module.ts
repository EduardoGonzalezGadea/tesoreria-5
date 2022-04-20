import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerCargandoComponent } from '../../componentes/spinner-cargando/spinner-cargando.component';

@NgModule({
  declarations: [
    SpinnerCargandoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SpinnerCargandoComponent
  ]
})
export class SpinnerCargandoModule { }
