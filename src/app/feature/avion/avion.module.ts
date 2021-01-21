import { NgModule } from '@angular/core';
import {CrearAvionComponent} from "@avion/components/crear-avion/crear-avion.component"; 
import {ListarAvionComponent} from "@avion/components/listar-avion/listar-avion.component"; 
import {AvionComponent} from "@avion/components/avion/avion.component"; 
import { AvionRoutingModule } from './avion-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
  CrearAvionComponent,
  ListarAvionComponent,
  AvionComponent
],
imports: [
  AvionRoutingModule,
  ReactiveFormsModule,
  CommonModule
],
providers: []
})
export class AvionModule { }
