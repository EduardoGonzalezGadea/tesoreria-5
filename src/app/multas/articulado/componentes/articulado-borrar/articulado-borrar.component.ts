import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import { ArticuladoModel } from '../../modelos/articulado.model';
import { ArticuladoService } from '../../servicios/articulado.service';

@Component({
  selector: 'app-articulado-borrar',
  templateUrl: './articulado-borrar.component.html',
  styleUrls: ['./articulado-borrar.component.scss']
})
export class ArticuladoBorrarComponent implements OnInit {

  formGroup!: FormGroup;

  id!: number;
  articulado!: ArticuladoModel;

  constructor(
    private rutaActiva: ActivatedRoute,
    private articuladoService: ArticuladoService,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {

    this.rutaActiva.params.subscribe(
      (params: Params) => {
        this.id = params.id;
        this.articuladoService.verUno(this.id).subscribe((data: any) => {
          this.articulado = data.data[0];
          this.formGroup.patchValue(this.articulado);
        });
      }
    );

    this.buildForm();

  }

  private buildForm(){
    this.formGroup = this.formBuilder.group({
      articulo: [0, Validators.required],
      apartado: '',
      descripcion: ['', Validators.required],
      ur: [0, Validators.required]
    });
  }

  onSubmit() {
    if(this.formGroup.valid) {
      this.articuladoService.borrar(this.id).subscribe((data: any) => {
        this.router.navigate(["/", "multas", "articulado"]);
      }, error => {
        console.log(error);
      });
    }
  }

  onCancel() {
    this.router.navigateByUrl("/multas/articulado");
  }

}
