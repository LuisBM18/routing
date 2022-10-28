import { Component, OnInit } from '@angular/core';
import { Almacen } from '../Interfaces/Almacen';
import { AlmacenService } from '../Servicios/almacen.service';

@Component({
  selector: 'app-agregar-producto-almacen',
  templateUrl: './agregar-producto-almacen.component.html',
  styleUrls: ['./agregar-producto-almacen.component.css']
})
export class AgregarProductoAlmacenComponent {

  esEdicion:boolean=false;

  constructor(private agregarAlmacenService: AlmacenService){
    this.ListaAlmacen = agregarAlmacenService.ListaAlmacen;
  }
  ListaAlmacen: Almacen[]=[];
  public almacen:Almacen=this.AlmacenVacio();
  public posicion: number = -1
  Agregar(): void {
    if(this.posicion == -1){
      this.almacen.Id = this.ListaAlmacen.length + 1;
    this.agregarAlmacenService.AgregarAlmacenService(this.almacen);
    this.almacen=this.AlmacenVacio();
    console.log("Hay:",this.ListaAlmacen.length,"administradores")
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
   eliminar(i: number):void{
    this.agregarAlmacenService.eliminarAlmacenService(this.posicion);
   };

   editar(i: number):void{
    this.esEdicion=true;
    this.almacen=this.cargaAlmacen(this.ListaAlmacen[i]);
    this.posicion=i;
  };

   cargaAlmacen(almacen:Almacen): Almacen{
    return{
      Id: almacen.Id,
      Nombre:almacen.Nombre,
      Cantidad:almacen.Cantidad
    };
   }
   AceptarEdicion():void{
    this.agregarAlmacenService.editarAlmacenService(this.posicion,this.almacen);
    this.esEdicion=false;
    this.almacen=this.AlmacenVacio();
   }


}
