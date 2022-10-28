import { Injectable } from '@angular/core';
import { Almacen } from '../Interfaces/Almacen';

@Injectable({
  providedIn: 'root'
})
export class AlmacenService {
  ListaAlmacen: Almacen[]=[{
    Id: 1,
    Nombre: "Leche",
    Cantidad: "250"
  }];
  constructor() {
  }
  public almacen:Almacen=this.AlmacenVacio();
  public posicion: number = -1
  AgregarAlmacenService(almacen: Almacen): void{
    if(this.posicion == -1){
      this.almacen.Id = this.ListaAlmacen.length+1;
      this.ListaAlmacen.push(almacen);
      this.almacen= this.AlmacenVacio();
      console.log("Hay:",this.ListaAlmacen.length,"en el almacen")
      console.table(this.ListaAlmacen)
  }
  else{
    let selectAlmacen: Almacen =  this.ListaAlmacen[this.posicion];
    selectAlmacen.Id = this.almacen.Id;
    selectAlmacen.Nombre = this.almacen.Nombre;
    selectAlmacen.Cantidad = this.almacen.Cantidad;
    this.almacen = this.AlmacenVacio();
    this.posicion = -1;
    console.table(this.ListaAlmacen)
  }
  }
  AlmacenVacio(): Almacen{
    return{
      Id: 0,
      Nombre:"",
      Cantidad:""
    };
  }
  eliminarAlmacenService(i:number): void{
    this.ListaAlmacen.splice(i,1);
    console.table(this.ListaAlmacen)
   }
   editarAlmacenService(i:number, almacenEditado:Almacen): void{
    this.ListaAlmacen[i]=almacenEditado;
  };
}

