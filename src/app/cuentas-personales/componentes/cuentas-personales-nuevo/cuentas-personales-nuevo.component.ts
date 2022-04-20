import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

import Swal from 'sweetalert2';

import { CuentasPersonalesService } from './../../servicios/cuentas-personales.service';
import { CuentasPersonalesModel } from '../../modelos/cuentas-personales-model';

@Component({
  selector: 'app-cuentas-personales-nuevo',
  templateUrl: './cuentas-personales-nuevo.component.html',
  styleUrls: ['./cuentas-personales-nuevo.component.scss']
})
export class CuentasPersonalesNuevoComponent implements OnInit {

  formGroup!: FormGroup;

  cuentaPersonal!: CuentasPersonalesModel;
  financieras: any[] = [];

  cuenta_actual = new FormControl('', [
    Validators.required
  ]);
  financiera = new FormControl(1, [
    Validators.required
  ]);

  bgButtons: string = "/freepiks/beach-394503_1920.jpg";

  constructor(
    private cuentasPersonalesService: CuentasPersonalesService,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {

    this.buildForm();

    this.cuentasPersonalesService.verFinancieras().subscribe((data: any) => {
      this.financieras = data.data;
    });

  }

  private buildForm(){
    this.formGroup = this.formBuilder.group({
      cedula: [''],
      nombres: [''],
      apellidos: [''],
      financiera: this.financiera,
      cuenta_anterior: [''],
      cuenta_actual: this.cuenta_actual,
      observaciones: ['']
    });
  }

  onSubmit() {
    if(this.formGroup.valid) {
      this.cuentasPersonalesService.nuevo(this.formGroup.value).subscribe((data: any) => {
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
          title: "Nuevo registro creado con éxito",
          icon: 'info'
        });  

        this.router.navigate(["/", "cuentas-personales"]);
      }, error => {
        console.log(error);
      });
    } else {
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
        html: "<h4>Debe incluir datos en el formulario</h4>"
      }).fire({
        title: "Error",
        icon: 'error'
      });
    }
  }

  onCancel() {
    this.router.navigateByUrl("cuentas-personales");
  }

  compararFinancieras(op1: any, op2: any) {
    if(op1 == null || op2 == null) {
      return false;
    }
    return op1 === op2;
  }

}
