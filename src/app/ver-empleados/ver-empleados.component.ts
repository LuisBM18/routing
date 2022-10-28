import { Component, Input, OnInit } from '@angular/core';
import { Empleado } from '../Interfaces/Empleado';

@Component({
  selector: 'app-ver-empleados',
  templateUrl: './ver-empleados.component.html',
  styleUrls: ['./ver-empleados.component.css']
})
export class VerEmpleadosComponent implements OnInit {

  @Input()
  empleadoLista!: Empleado;

  @Input()
  indice!: number;

  constructor() { }

  ngOnInit(): void {
  }

  items = [''];

  AgregarCaracteristica(newItem:string){
    this.items.push(newItem);
    console.log(this.items)
  }
}
