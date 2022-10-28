import { Component, Input, OnInit } from '@angular/core';
import { Almacen } from '../Interfaces/Almacen';

@Component({
  selector: 'app-ver-almacen',
  templateUrl: './ver-almacen.component.html',
  styleUrls: ['./ver-almacen.component.css']
})
export class VerAlmacenComponent implements OnInit {

  @Input()
  almacenLista!: Almacen;

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
