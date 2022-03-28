import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticuladoUiComponent } from './multas/articulado/componentes/articulado-ui/articulado-ui.component';
import { ArticuladoEditarComponent } from './multas/articulado/componentes/articulado-editar/articulado-editar.component';
import { ArticuladoNuevoComponent } from './multas/articulado/componentes/articulado-nuevo/articulado-nuevo.component';
import { ArticuladoBorrarComponent } from './multas/articulado/componentes/articulado-borrar/articulado-borrar.component';
import { ChequesUiComponent } from './cheques/componentes/cheques-ui/cheques-ui.component';
import { ChequesEmitirComponent } from './cheques/componentes/cheques-emitir/cheques-emitir.component';
import { CuentasPersonalesUiComponent } from './cuentas-personales/componentes/cuentas-personales-ui/cuentas-personales-ui.component';
import { CuentasPersonalesEditarComponent } from './cuentas-personales/componentes/cuentas-personales-editar/cuentas-personales-editar.component';
import { CuentasPersonalesNuevoComponent } from './cuentas-personales/componentes/cuentas-personales-nuevo/cuentas-personales-nuevo.component';

const routes: Routes = [
  {path: 'multas/articulado', component: ArticuladoUiComponent},
  {path: 'multas/articulado/editar/:id', component: ArticuladoEditarComponent},
  {path: 'multas/articulado/crear', component: ArticuladoNuevoComponent},
  {path: 'multas/articulado/borrar/:id', component: ArticuladoBorrarComponent},
  {path: 'cheques', component: ChequesUiComponent},
  {path: 'cheques/emitir/:id', component: ChequesEmitirComponent},
  {path: 'cuentas-personales', component: CuentasPersonalesUiComponent},
  {path: 'cuentas-personales/nuevo', component: CuentasPersonalesNuevoComponent},
  {path: 'cuentas-personales/editar/:id', component: CuentasPersonalesEditarComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
