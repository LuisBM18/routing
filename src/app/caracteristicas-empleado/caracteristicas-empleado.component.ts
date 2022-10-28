import { EventEmitter, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-caracteristicas-empleado',
  templateUrl: './caracteristicas-empleado.component.html',
  styleUrls: ['./caracteristicas-empleado.component.css']
})
export class CaracteristicasEmpleadoComponent implements OnInit {

  @Output() Caracteristicas = new EventEmitter<string>();

  AgregarCaracteristicas(value:string) {
    this.Caracteristicas.emit(value);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
