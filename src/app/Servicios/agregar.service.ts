import { Injectable } from '@angular/core';
import { Empleado } from '../Interfaces/Empleado';

@Injectable({
  providedIn: 'root'
})
export class AgregarService {
  ListaEmp: Empleado[]=[{
    Id: 1,
    Nombre: "David",
    Apellido: "Siclla",
    Edad: "21",
    Usuario: "Batroz"
  }];
  constructor() {
  }
  public empleado:Empleado=this.EmpleadoVacio();
  public posicion: number = -1
  AgregarEmpleadoService(empleado: Empleado): void{
    if(this.posicion == -1){
      this.empleado.Id = this.ListaEmp.length+1;
      this.ListaEmp.push(empleado);
      this.empleado= this.EmpleadoVacio();
      console.log("Hay:",this.ListaEmp.length,"empleados")
      console.table(this.ListaEmp)
  }
  else{
    let selectEmpleado: Empleado =  this.ListaEmp[this.posicion];
    selectEmpleado.Id = this.empleado.Id;
    selectEmpleado.Nombre = this.empleado.Nombre;
    selectEmpleado.Apellido = this.empleado.Apellido;
    selectEmpleado.Edad = this.empleado.Edad;
    selectEmpleado.Usuario = this.empleado.Usuario;
    this.empleado = this.EmpleadoVacio();
    this.posicion = -1;
    console.table(this.ListaEmp)
  }
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
  eliminarEmpleadoService(i:number): void{
    this.ListaEmp.splice(i,1);
    console.table(this.ListaEmp)
   }
   editarEmpleadoService(i:number, empleadoEditado:Empleado): void{
    this.ListaEmp[i]=empleadoEditado;
    // let selectEmpleado: Empleado =  this.ListaEmp[i];
    // this.empleado.Id = selectEmpleado.Id;
    // this.empleado.Nombre = selectEmpleado.Nombre;
    // this.empleado.Apellido = selectEmpleado.Apellido;
    // this.empleado.Edad = selectEmpleado.Edad;
    // this.empleado.Usuario = selectEmpleado.Usuario;
    // this.posicion = i;
    // console.table(this.ListaEmp)
  };
}
