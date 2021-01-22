import { Component, OnInit } from '@angular/core';
import { Avion } from '@avion/shared/model/Avion';
import { AvionService } from '@avion/shared/service/avion.service';

@Component({
  selector: 'app-listar-avion',
  templateUrl: './listar-avion.component.html',
  styleUrls: ['./listar-avion.component.css']
})
export class ListarAvionComponent implements OnInit {

  public items: Avion[] = [];
  constructor(private avionService: AvionService) { }

  ngOnInit(): void {
    this.consultarListadoAviones();
  }

  eliminar(id: number) {
    this.avionService.eliminar(id).subscribe(
      response => {
        console.log(response)
        this.consultarListadoAviones();
      }
    );
  }

  consultarListadoAviones() {
    this.avionService.consultar().subscribe(
      response => {
        console.log(response);
        this.items = response;
      }
    )
  }

}
