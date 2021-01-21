import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Vuelo } from 'src/app/feature/vuelo/shared/model/Vuelo';
import { VueloService } from 'src/app/feature/vuelo/shared/service/vuelo.service';

@Component({
  selector: 'app-consultar-disponibilidad',
  templateUrl: './consultar-disponibilidad.component.html',
  styleUrls: ['./consultar-disponibilidad.component.css']
})
export class ConsultarDisponibilidadComponent implements OnInit {

  ciudadOrigen: string = "";
  ciudadDestino: string = "";
  fecha: Date = new Date();

  public vuelos: Vuelo[] = [];

  constructor(protected vueloService: VueloService,
    public datepipe: DatePipe) { }

  ngOnInit(): void {
  }

  consultarDisponibilidad(){
    this.vueloService.consultar(this.ciudadOrigen,this.ciudadDestino, this.datepipe.transform(this.fecha, 'yyyy-MM-dd'))
    .subscribe(
      response => {
        this.vuelos = response;
      }
    )
  }
}
