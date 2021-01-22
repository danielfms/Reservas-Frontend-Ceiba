import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarDestinoComponent } from './components/listar-destino/listar-destino.component';
import { DestinoRoutingModule } from './destino-routing.module';
import { CrearDestinoComponent } from './components/crear-destino/crear-destino.component';
import { DestinoComponent } from './components/destino/destino.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ListarDestinoComponent,
    CrearDestinoComponent,
    DestinoComponent
  ],
  imports: [
    CommonModule,
    DestinoRoutingModule,
    ReactiveFormsModule
  ]
})
export class DestinoModule { }
