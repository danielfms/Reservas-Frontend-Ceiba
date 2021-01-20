import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vuelo } from '../../shared/model/Vuelo';

@Component({
  selector: 'app-listar-vuelo',
  templateUrl: './listar-vuelo.component.html',
  styleUrls: ['./listar-vuelo.component.css']
})
export class ListarVueloComponent implements OnInit {

  @Input()
  public items: Vuelo[];

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  realizarReservar(id: number){
    this.route.navigate(["reserva", "crear", id]);
  }

}
