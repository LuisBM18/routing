import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarEmpleadoComponent } from './agregar-empleado/agregar-empleado.component';
import { AgregarProductoAlmacenComponent } from './agregar-producto-almacen/agregar-producto-almacen.component';
import { VerEmpleadosComponent } from './ver-empleados/ver-empleados.component';

const routes: Routes = [

  {path:'Agregar-Empleado', component: AgregarEmpleadoComponent},
  {path:'Ver-Empleado', component: VerEmpleadosComponent},
  {path:'Almacen', component: AgregarProductoAlmacenComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
