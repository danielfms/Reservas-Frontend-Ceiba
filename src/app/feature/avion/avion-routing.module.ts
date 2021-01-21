import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AvionComponent } from './components/avion/avion.component';
import { CrearAvionComponent } from './components/crear-avion/crear-avion.component';
import { ListarAvionComponent } from './components/listar-avion/listar-avion.component';

const routes: Routes = [
      {
        path: '',
        component: AvionComponent
      },
      {
        path: 'crear',
        component: CrearAvionComponent
      },
      {
        path: 'listar',
        component: ListarAvionComponent
      }
    ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AvionRoutingModule { }
