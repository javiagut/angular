import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CrudService } from 'src/app/servicio/crud.service';
import { Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-agregar-empleado',
  templateUrl: './agregar-empleado.component.html',
  styleUrls: ['./agregar-empleado.component.css']
})
export class AgregarEmpleadoComponent implements OnInit {

  formularioEmpleados:FormGroup;

  constructor(
    public formulario:FormBuilder,
    private crudService:CrudService,
    private routeador:Router
    ) {
    

    this.formularioEmpleados = this.formulario.group({
      nombre:[''],
      correo:['']
    })

  }

  ngOnInit(): void {
  }
  enviarDatos():any {
    console.log(this.formularioEmpleados.value)
    this.crudService.AgregarEmpleado(this.formularioEmpleados.value).subscribe();
    this.routeador.navigateByUrl('/listar-empleado');
  }
}
