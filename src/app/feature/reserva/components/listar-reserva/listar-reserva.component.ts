import { Component, OnInit } from '@angular/core';
import { Reserva } from '@reserva/shared/model/Reserva';
import { ReservaService } from '@reserva/shared/service/reserva.service';

@Component({
  selector: 'app-listar-reserva',
  templateUrl: './listar-reserva.component.html',
  styleUrls: ['./listar-reserva.component.css']
})
export class ListarReservaComponent implements OnInit {
  items: Reserva[] = [];
  constructor(private reservaService: ReservaService) { }

  ngOnInit(): void {
    this.reservaService.consultar()
    .subscribe(
      response =>{
        this.items = response;
      }
    )
  }

}
