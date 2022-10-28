import { Component, OnInit } from '@angular/core';
import { Empleado } from '../Interfaces/Empleado';
import { AgregarService } from '../Servicios/agregar.service';

@Component({
  selector: 'app-agregar-empleado',
  templateUrl: './agregar-empleado.component.html',
  styleUrls: ['./agregar-empleado.component.css']
})
export class AgregarEmpleadoComponent {
  title = 'MinimarketBelu';
  esEdicion:boolean=false;

  constructor(private agregarEmpleadoService:AgregarService){
    this.ListaEmp = agregarEmpleadoService.ListaEmp;
  }
  // public Empleado01: Empleado ={
  //   Id: 1,
  //   Nombre: "David",
  //   Apellido: "Siclla",
  //   Edad: "21",
  //   Usuario: "Batroz"
  // }
  ListaEmp: Empleado[]=[];
  public empleado:Empleado=this.EmpleadoVacio();
  public posicion: number = -1
  Agregar(): void {
    this.agregarEmpleadoService.AgregarEmpleadoService(this.empleado);
    this.empleado=this.EmpleadoVacio();
  //   if(this.posicion == -1){
  //     this.empleado.Id = this.ListaEmp.length + 1;
  //     this.ListaEmp.push(this.empleado);
  //     this.empleado= this.EmpleadoVacio();
  //     console.log("Hay:",this.ListaEmp.length,"empleados")
  //     console.table(this.ListaEmp)
  //     }
  //     else{
  //       let selectEmpleado: Empleado =  this.ListaEmp[this.posicion];
  //       selectEmpleado.Id = this.empleado.Id;
  //       selectEmpleado.Nombre = this.empleado.Nombre;
  //       selectEmpleado.Apellido = this.empleado.Apellido;
  //       selectEmpleado.Edad = this.empleado.Edad;
  //       selectEmpleado.Usuario = this.empleado.Usuario;
  //       this.empleado = this.EmpleadoVacio();
  //       this.posicion = -1;
  //       console.table(this.ListaEmp)
  //     }
  }
  EmpleadoVacio(): Empleado{
  return{
    Id: 0,
    Nombre:"",
    Apellido:"",
    Edad: "",
    Usuario:""
  };
 }
   eliminar(i: number):void{
    this.agregarEmpleadoService.eliminarEmpleadoService(this.posicion);
   };

   editar(i: number):void{
    // this.agregarEmpleadoService.editarEmpleadoService(this.posicion);
    this.esEdicion=true;
    this.empleado=this.cargaEmpleado(this.ListaEmp[i]);
    this.posicion=i;
  };

   cargaEmpleado(empleado:Empleado): Empleado{
    return{
      Id: empleado.Id,
      Nombre:empleado.Nombre,
      Apellido:empleado.Apellido,
      Edad: empleado.Edad,
      Usuario:empleado.Usuario
    };
   }
   AceptarEdicion():void{
    this.agregarEmpleadoService.editarEmpleadoService(this.posicion,this.empleado);
    this.esEdicion=false;
    this.empleado=this.EmpleadoVacio();
   }

}
