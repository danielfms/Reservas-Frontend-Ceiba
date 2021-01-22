import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DestinoService } from '@destino/shared/service/destino.service';
import { Destino } from '../../shared/model/Destino';

@Component({
  selector: 'app-listar-destino',
  templateUrl: './listar-destino.component.html',
  styleUrls: ['./listar-destino.component.css']
})
export class ListarDestinoComponent implements OnInit {
  items: Destino[] = [];
  constructor(private destinoService: DestinoService, private route: Router) { }

  ngOnInit(): void {
    this.consultarListadoDestinos();
  }

  eliminar(id: number) {
    this.destinoService.eliminar(id).subscribe(
      response => {
        console.log(response);
        this.consultarListadoDestinos();
      }
    );
  }

  crear(){
    this.route.navigate(["destino/crear"]);
  }


  consultarListadoDestinos() {
    this.destinoService.consultar().subscribe(
      response => {
        this.items = response;
      }
    )
  }

}
