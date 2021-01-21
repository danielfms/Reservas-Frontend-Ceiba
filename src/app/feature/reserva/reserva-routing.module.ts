import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CancelarReservaComponent } from './/components/cancelar-reserva/cancelar-reserva.component';
import { ConsultarDisponibilidadComponent } from './components/consultar-disponibilidad/consultar-disponibilidad.component';
import { CrearReservaComponent } from './components/crear-reserva/crear-reserva.component';
import { ListarReservaComponent } from './components/listar-reserva/listar-reserva.component';
import { ReservaComponent } from './components/reserva/reserva.component';


const routes: Routes =     [
      {
        path: '',
        component: ReservaComponent
      },
      {
        path: 'disponibilidad',
        component: ConsultarDisponibilidadComponent
      },
      {
        path: 'cancelar',
        component: CancelarReservaComponent
      },
      {
        path: 'crear/:idVuelo',
        component: CrearReservaComponent
      },
      {
        path: 'listar',
        component: ListarReservaComponent
      }
    ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReservaRoutingModule { }
