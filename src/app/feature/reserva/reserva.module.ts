import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { CrearReservaComponent } from './components/crear-reserva/crear-reserva.component';
import { CancelarReservaComponent } from './components/cancelar-reserva/cancelar-reserva.component';
import { ReservaComponent } from './components/reserva/reserva.component';
import { ReservaRoutingModule } from './reserva-routing.module';
import { SharedModule } from '@shared/shared.module';
import { VueloModule } from '../vuelo/vuelo.module';
import { ConsultarDisponibilidadComponent } from './components/consultar-disponibilidad/consultar-disponibilidad.component';
import { ListarReservaComponent } from './components/listar-reserva/listar-reserva.component';
import { ReservaService } from './shared/service/reserva.service';



@NgModule({
  declarations: [
    CrearReservaComponent, 
    CancelarReservaComponent, 
    ReservaComponent,
    ConsultarDisponibilidadComponent,
    ListarReservaComponent
  ],
  imports: [
    CommonModule,
    ReservaRoutingModule,
    SharedModule,
    VueloModule
  ],
  providers: [DatePipe, ReservaService]
})
export class ReservaModule { }