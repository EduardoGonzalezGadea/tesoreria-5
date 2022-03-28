import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DataTablesModule } from "angular-datatables";
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ArticuladoService } from './multas/articulado/servicios/articulado.service';

import { ArticuladoListarComponent } from './multas/articulado/componentes/articulado-listar/articulado-listar.component';
import { InicioMenuComponent } from './inicio/inicio-menu/inicio-menu.component';
import { ArticuladoUiComponent } from './multas/articulado/componentes/articulado-ui/articulado-ui.component';
import { InicioUiComponent } from './inicio/inicio-ui/inicio-ui.component';
import { ArticuladoEditarComponent } from './multas/articulado/componentes/articulado-editar/articulado-editar.component';
import { ArticuladoNuevoComponent } from './multas/articulado/componentes/articulado-nuevo/articulado-nuevo.component';
import { ArticuladoBorrarComponent } from './multas/articulado/componentes/articulado-borrar/articulado-borrar.component';
import { ChequesUiComponent } from './cheques/componentes/cheques-ui/cheques-ui.component';
import { ChequesListarDisponiblesComponent } from './cheques/componentes/cheques-listar-disponibles/cheques-listar-disponibles.component';
import { ChequesListarEmitidosComponent } from './cheques/componentes/cheques-listar-emitidos/cheques-listar-emitidos.component';
import { ChequesEmitirComponent } from './cheques/componentes/cheques-emitir/cheques-emitir.component';
import { CuentasPersonalesUiComponent } from './cuentas-personales/componentes/cuentas-personales-ui/cuentas-personales-ui.component';
import { CuentasPersonalesListarComponent } from './cuentas-personales/componentes/cuentas-personales-listar/cuentas-personales-listar.component';
import { CuentasPersonalesEditarComponent } from './cuentas-personales/componentes/cuentas-personales-editar/cuentas-personales-editar.component';
import { CuentasPersonalesNuevoComponent } from './cuentas-personales/componentes/cuentas-personales-nuevo/cuentas-personales-nuevo.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticuladoListarComponent,
    InicioMenuComponent,
    ArticuladoUiComponent,
    InicioUiComponent,
    ArticuladoEditarComponent,
    ArticuladoNuevoComponent,
    ArticuladoBorrarComponent,
    ChequesUiComponent,
    ChequesListarDisponiblesComponent,
    ChequesListarEmitidosComponent,
    ChequesEmitirComponent,
    CuentasPersonalesUiComponent,
    CuentasPersonalesListarComponent,
    CuentasPersonalesEditarComponent,
    CuentasPersonalesNuevoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    DataTablesModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    SweetAlert2Module.forRoot()
  ],
  providers: [ArticuladoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
