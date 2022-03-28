import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

import { ArticuladoService } from './../../servicios/articulado.service';
import { ArticuladoModel } from '../../modelos/articulado.model';

@Component({
  selector: 'app-articulado-listar',
  templateUrl: './articulado-listar.component.html',
  styleUrls: ['./articulado-listar.component.scss'],
})
export class ArticuladoListarComponent implements OnInit {

  dtOptions: any = {};
  dtTrigger: Subject<any> = new Subject<any>();

  articulados: ArticuladoModel[] = [];

  constructor(
    private articuladoService: ArticuladoService,
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
        { targets: [4], visible: true }
      ],
      select: true,
      // Declare the use of the extension in the dom parameter
      dom: 'Bftip',
      // Configure the buttons
      buttons: [
        {
          extend: 'colvis',
          text: 'Columnas',
          className: 'btn btn-primary text-white-yellow',
        },
        {
          extend: 'copy',
          text: 'Copiar',
          className: 'btn btn-primary text-white-yellow',
        },
        {
          extend: 'excel',
          text: 'Excel',
          className: 'btn btn-primary text-white-yellow',
        },
        {
          extend: 'print',
          text: 'Imprimir',
          title: "<div><h3>Jefatura de Policía de Montevideo<br/>Dirección de Tesorería</div></h3><h4>Multas del Cuerpo de Policía de Tránsito</h4>",
          className: 'btn btn-primary text-white-yellow',
          exportOptions: {
              columns: [0,1,2,3]
          }
        },
        {
          text: 'Nuevo...',
          className: 'btn btn-secondary text-white-yellow',
          key: '1',
          action: function (e: any, dt: any, node: any, config: any) {
            self.onNuevo();
          }
        }
      ],
      // Use this attribute to enable the responsive extension
      responsive: true
    };

    this.articuladoService.verTodos().subscribe((data: any) => {
      this.articulados = data.data;
      // Calling the DT trigger to manually render the table
      this.dtTrigger.next();
    });
    
  }

  onNuevo(): void {
    this.router.navigate(['/', 'multas', 'articulado', 'crear']);
  }

  onEditar(id: number): void {
    this.router.navigate(['/', 'multas', 'articulado', 'editar', id]);
  }

  onBorrar(id: number): void {
    this.router.navigate(['/', 'multas', 'articulado', 'borrar', id]);
  }

}
