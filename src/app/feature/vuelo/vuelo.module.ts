import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ListarVueloComponent } from './components/listar-vuelo/listar-vuelo.component';



@NgModule({
  declarations: [
    ListarVueloComponent],
  exports:[ ListarVueloComponent],
  imports:[CommonModule]
})
export class VueloModule { }