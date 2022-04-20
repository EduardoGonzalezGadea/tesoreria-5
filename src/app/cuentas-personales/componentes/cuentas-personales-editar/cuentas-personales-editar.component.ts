import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import Swal from 'sweetalert2';

import { CuentasPersonalesService } from './../../servicios/cuentas-personales.service';
import { CuentasPersonalesModel } from '../../modelos/cuentas-personales-model';

@Component({
  selector: 'app-cuentas-personales-editar',
  templateUrl: './cuentas-personales-editar.component.html',
  styleUrls: ['./cuentas-personales-editar.component.scss']
})
export class CuentasPersonalesEditarComponent implements OnInit {

  formGroup!: FormGroup;

  id!: number;
  indice: number = 0;
  cuentaPersonal!: CuentasPersonalesModel;
  financieras: any[] = [];

  constructor(
    private rutaActiva: ActivatedRoute,
    private cuentasPersonalesService: CuentasPersonalesService,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {

    this.rutaActiva.params.subscribe(
      (params: Params) => {
        this.id = params.id;
        this.cuentasPersonalesService.verUno(this.id).subscribe((data: any) => {
          this.cuentaPersonal = data.data[0];
          this.formGroup.patchValue(this.cuentaPersonal);
        });
      }
    );
    
    this.cuentasPersonalesService.verFinancieras().subscribe((data: any) => {
      this.financieras = data.data;
    });

    this.buildForm();

  }

  private buildForm(){
    this.formGroup = this.formBuilder.group({
      cedula: [''],
      nombres: [''],
      apellidos: [''],
      financiera: ['', Validators.required],
      cuenta_anterior: [''],
      cuenta_actual: ['', Validators.required],
      observaciones: ['']
    });
  }

  onSubmit() {
    if(this.formGroup.valid) {
      this.cuentasPersonalesService.editar(this.id, this.formGroup.value).subscribe((data: any) => {
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
          title: "Actualizado con éxito",
          icon: 'info'
        });  
        this.router.navigate(["/", "cuentas-personales"]);
      }, error => {
        console.log(error);
      });
    }
  }

  onCancel() {
    this.router.navigateByUrl("cuentas-personales");
  }

}
