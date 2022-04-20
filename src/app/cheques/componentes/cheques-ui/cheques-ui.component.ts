import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

// import { ChequesListarDisponiblesComponent } from '../cheques-listar-disponibles/cheques-listar-disponibles.component';

@Component({
  selector: 'app-cheques-ui',
  templateUrl: './cheques-ui.component.html',
  styleUrls: ['./cheques-ui.component.scss']
})
export class ChequesUiComponent implements OnInit {


  // @ViewChild(ChequesListarDisponiblesComponent) chequeListarEmitir!: { emitirID: number | null; };
  // @Output() messageEvent = new EventEmitter<string>();

  // actualID: number | null = null;

  constructor() { }

  ngOnInit(): void {

  }

  // ngAfterViewInit() {
  //   this.actualID = this.chequeListarEmitir.emitirID;
  // }

  // receiveEdit($event: number | null) {
  //   this.actualID = $event;
  // }

}
