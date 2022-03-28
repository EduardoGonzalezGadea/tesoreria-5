import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import { ArticuladoModel } from '../../modelos/articulado.model';
import { ArticuladoService } from '../../servicios/articulado.service';

@Component({
  selector: 'app-articulado-nuevo',
  templateUrl: './articulado-nuevo.component.html',
  styleUrls: ['./articulado-nuevo.component.scss']
})
export class ArticuladoNuevoComponent implements OnInit {

  formGroup!: FormGroup;

  articulado!: ArticuladoModel;

  constructor(
    private rutaActiva: ActivatedRoute,
    private articuladoService: ArticuladoService,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {

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
      this.articuladoService.crear(this.formGroup.value).subscribe((data: any) => {
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
