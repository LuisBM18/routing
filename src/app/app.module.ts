import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgregarEmpleadoComponent } from './agregar-empleado/agregar-empleado.component';
import { VerEmpleadosComponent } from './ver-empleados/ver-empleados.component';
import { CaracteristicasEmpleadoComponent } from './caracteristicas-empleado/caracteristicas-empleado.component';
import { AgregarProductoAlmacenComponent } from './agregar-producto-almacen/agregar-producto-almacen.component';
import { VerAlmacenComponent } from './ver-almacen/ver-almacen.component';
import { CaracteristicaAlmacenComponent } from './caracteristica-almacen/caracteristica-almacen.component';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    AgregarEmpleadoComponent,
    VerEmpleadosComponent,
    CaracteristicasEmpleadoComponent,
    AgregarProductoAlmacenComponent,
    VerAlmacenComponent,
    CaracteristicaAlmacenComponent,
    FooterComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
