import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrearDestinoComponent } from './components/crear-destino/crear-destino.component';
import { DestinoComponent } from './components/destino/destino.component';
import { ListarDestinoComponent } from './components/listar-destino/listar-destino.component';

const routes: Routes = [
      {
        path: '',
        component: DestinoComponent
      },
      {
        path: 'crear',
        component: CrearDestinoComponent
      },
      {
        path: 'listar',
        component: ListarDestinoComponent
      }
    ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DestinoRoutingModule { }
