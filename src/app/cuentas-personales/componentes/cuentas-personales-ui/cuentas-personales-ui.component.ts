import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cuentas-personales-ui',
  templateUrl: './cuentas-personales-ui.component.html',
  styleUrls: ['./cuentas-personales-ui.component.scss']
})
export class CuentasPersonalesUiComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onNew() {
    this.router.navigate(['/', 'cuentas-personales', 'nuevo']);
  }

}
