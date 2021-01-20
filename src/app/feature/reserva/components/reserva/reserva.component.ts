
import { Component, OnInit } from '@angular/core';
import { Vuelo } from 'src/app/feature/vuelo/shared/model/Vuelo';
import { VueloService } from 'src/app/feature/vuelo/shared/service/vuelo.service';
import { DatePipe } from '@angular/common'

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.css']
})
export class ReservaComponent implements OnInit {

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
