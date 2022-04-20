import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Observable, Subject } from 'rxjs';

import { ChequesService } from './../../servicios/cheques.service';
import { ChequesModel } from '../../modelos/cheques-model';

@Component({
  selector: 'app-cheques-emitir',
  templateUrl: './cheques-emitir.component.html',
  styleUrls: ['./cheques-emitir.component.scss']
})
export class ChequesEmitirComponent implements OnInit {

  // @Input() emitirID!: number | null;
  emitirID!: number | null;

  formGroup!: FormGroup;

  private emitirID$: any = null;
  cheque!: ChequesModel;

  constructor(
    private chequesService: ChequesService,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {

    this.emitirID$ = this.chequesService.getEmitirID$();
    this.emitirID$.subscribe((emitirID: number | null) => {
      this.emitirID = emitirID;

      this.chequesService.verUno(this.emitirID).subscribe((data: any) => {
        this.cheque = data.data[0];
        this.formGroup.patchValue(this.cheque);
      });

    });


    this.buildForm();

  }

  private buildForm(){
    this.formGroup = this.formBuilder.group({
      banco: ['', Validators.required],
      sucursal: ['', Validators.required],
      serie: [0, Validators.required],
      numero: [0, Validators.required],
      doc_tipo: [''],
      doc_numero: [0],
      concepto: ['', Validators.required],
      titular: ['', Validators.required],
      monto: [0, Validators.required]
    });
  }

  onSubmit() {
    if(this.formGroup.valid) {
      // this.articuladoService.editar(this.id, this.formGroup.value).subscribe((data: any) => {
      //   this.router.navigate(["/", "multas", "articulado"]);
      // }, error => {
      //   console.log(error);
      // });
    }
  }

  onCancel() {
    this.router.navigateByUrl("/cheques");
  }
  
}
