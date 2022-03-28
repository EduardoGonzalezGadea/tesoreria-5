import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

import { DataTableDirective } from 'angular-datatables';
import Swal from 'sweetalert2';

import { CuentasPersonalesService } from './../../servicios/cuentas-personales.service';
import { CuentasPersonalesModel } from '../../modelos/cuentas-personales-model';

@Component({
  selector: 'app-cuentas-personales-listar',
  templateUrl: './cuentas-personales-listar.component.html',
  styleUrls: ['./cuentas-personales-listar.component.scss']
})
export class CuentasPersonalesListarComponent implements OnInit, OnDestroy {

  @ViewChild(DataTableDirective, {static: false})
  dtElement!: DataTableDirective;

  id!: number | null;

  dtOptions: any = {};
  dtTrigger: Subject<any> = new Subject<any>();

  cuentasPersonales: CuentasPersonalesModel[] = [];

  constructor(
    private cuentasPersonalesService: CuentasPersonalesService,
    private router: Router
  ) {}

  ngOnInit(): void {

    var self = this;

    this.dtOptions = {
      stateSave: true,
      language: {
        "url": "assets/datatables/es-ar.json"
      },
      pagingType: 'numbers',
      pageLength: 10,
      columnDefs: [
        { targets: [6], visible: true }
      ],
      select: true,
      // Declare the use of the extension in the dom parameter
      dom: 'Bftip',
      // Configure the buttons
      buttons: [
        {
          extend: 'colvis',
          text: 'Columnas',
          className: 'btn btn-warning',
        },
        {
          extend: 'copy',
          text: 'Copiar',
          className: 'btn btn-warning',
        },
        {
          extend: 'excel',
          text: 'Excel',
          className: 'btn btn-warning',
        },
        {
          extend: 'print',
          text: 'Imprimir',
          title: "<div><h3>Jefatura de Policía de Montevideo<br/>Dirección de Tesorería</div></h3><h4>Cuentas financieras personales</h4>",
          className: 'btn btn-warning',
          exportOptions: {
              columns: [0,1,2,3,4,5]
          }
        }
      ],
      // Use this attribute to enable the responsive extension
      responsive: true
    };

    this.cuentasPersonalesService.verTodos().subscribe((data: any) => {
      this.cuentasPersonales = data.data;
      // Calling the DT trigger to manually render the table
      this.dtTrigger.next();
    });
    
  }

  onEditar(id: number | null): void {
    this.router.navigate(['/', 'cuentas-personales', 'editar', id]);
  }

  onBorrar(id: number | null, nombres: string | null, apellidos: string | null, cedula: string | null): void {
    this.id = id;
    if(cedula == null) {
      cedula = "<sin dato>";
    }
    Swal.fire({
      title: "¿Está seguro/a?",
      text: "Se borrarán los datos de " + nombres + " " + apellidos + " (C.I. " + cedula + ")",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, BORRARLO!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {

        this.cuentasPersonalesService.borrar(this.id).subscribe((data: any) => {
          Swal.mixin({
            toast: true,
            position: 'bottom-end',
            showConfirmButton: false,
            showCloseButton: true,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            },
            didDestroy: () => {
              
            },
            html: ""
          }).fire({
            title: "Borrado con éxito",
            icon: 'info'
          });

          this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
            // Destroy the table first
            dtInstance.rows('.selected').remove();
          });
      
          this.rerender();

        }, error => {
          console.log(error);
        });
  
      }
    });
  }
  
  rerender(): void {
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      // Destroy the table first
      dtInstance.destroy();
      // Call the dtTrigger to rerender again
      this.dtTrigger.next();
    });
  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }

}
