import { Component, Input, OnInit } from '@angular/core';
import { Vuelo } from '../../shared/model/Vuelo';

@Component({
  selector: 'app-listar-vuelo',
  templateUrl: './listar-vuelo.component.html',
  styleUrls: ['./listar-vuelo.component.css']
})
export class ListarVueloComponent implements OnInit {

  @Input()
  public items: Vuelo[];

  constructor() { }

  ngOnInit(): void {
  }

  realizarReservar(id: number){
    console.log(id);
  }

}
