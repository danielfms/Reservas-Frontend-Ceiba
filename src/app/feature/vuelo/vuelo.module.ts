import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReservaRoutingModule } from '@reserva/reserva-routing.module';
import { ListarVueloComponent } from './components/listar-vuelo/listar-vuelo.component';



@NgModule({
  declarations: [
    ListarVueloComponent],
  exports:[ ListarVueloComponent],
  imports:[CommonModule, ReservaRoutingModule]
})
export class VueloModule { }