import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

import { ChequesService } from './../../servicios/cheques.service';
import { ChequesModel } from '../../modelos/cheques-model';

@Component({
  selector: 'app-cheques-listar-disponibles',
  templateUrl: './cheques-listar-disponibles.component.html',
  styleUrls: ['./cheques-listar-disponibles.component.scss']
})
export class ChequesListarDisponiblesComponent implements OnInit {

  // @Output() emitirEvent = new EventEmitter<number | null>();

  dtOptions: any = {};
  dtTrigger: Subject<any> = new Subject<any>();

  cheques: ChequesModel[] = [];
  emitirID: number | null = null;

  constructor(
    private chequesService: ChequesService,
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
        { targets: [3], visible: true }
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
          title: "<div><h3>Jefatura de Policía de Montevideo<br/>Dirección de Tesorería</div></h3><h4>Cheques disponibles</h4>",
          className: 'btn btn-warning',
          exportOptions: {
              columns: [0,1,2]
          }
        }
      ],
      // Use this attribute to enable the responsive extension
      responsive: true
    };

    this.chequesService.verDisponibles().subscribe((data: any) => {
      this.cheques = data.data;
      // Calling the DT trigger to manually render the table
      this.dtTrigger.next();
      // Comunicar cheque disponible para emitir
      this.onEmitir(this.cheques[0]['id']);
    });
    
  }

  onEmitir(id: number | null): void {
    // this.emitirID = id;
    // this.emitirEvent.emit(this.emitirID);
    this.chequesService.onEmitir(id);
  }

}
