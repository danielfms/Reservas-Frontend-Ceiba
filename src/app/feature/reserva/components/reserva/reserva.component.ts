
import { Component, OnInit } from '@angular/core';
import { VueloService } from 'src/app/feature/vuelo/shared/service/vuelo.service';
import { DatePipe } from '@angular/common'

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.css']
})
export class ReservaComponent implements OnInit {
  constructor(protected vueloService: VueloService,
    public datepipe: DatePipe) { }

  ngOnInit(): void {
  }
}
