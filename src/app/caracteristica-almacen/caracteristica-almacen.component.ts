import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-caracteristica-almacen',
  templateUrl: './caracteristica-almacen.component.html',
  styleUrls: ['./caracteristica-almacen.component.css']
})
export class CaracteristicaAlmacenComponent implements OnInit {

  @Output() Caracteristicas = new EventEmitter<string>();

  AgregarCaracteristicas(value:string) {
    this.Caracteristicas.emit(value);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
