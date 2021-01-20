import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ReservaService } from '@reserva/shared/service/reserva.service';
import { Vuelo } from 'src/app/feature/vuelo/shared/model/Vuelo';
import { VueloService } from 'src/app/feature/vuelo/shared/service/vuelo.service';

const LONGITUD_PERMITIDA_TIPO_IDENTIFICACION = 2;
const LONGITUD_MINIMA_PERMITIDA_NUMERO_IDENTIFICACION = 6;

@Component({
  selector: 'app-crear-reserva',
  templateUrl: './crear-reserva.component.html',
  styleUrls: ['./crear-reserva.component.css']
})
export class CrearReservaComponent implements OnInit {
  vuelo: Vuelo = new Vuelo(0, 0,0, new Date(), 0,'','', '',0);
  reservaForm: FormGroup;
  constructor(protected vueloService: VueloService,
    protected reservaService: ReservaService,
    private route: ActivatedRoute,
    public datepipe: DatePipe) { }

  ngOnInit(): void {
    this.vueloService.consultarPorId(this.route.snapshot.params['idVuelo']).subscribe(
      response => {
        this.vuelo = response;
        console.log('INFO VUELO', this.vuelo);
        this.construirFormularioReserva();
      }
    );
  }

  private construirFormularioReserva() {
    this.reservaForm = new FormGroup({
      id: new FormControl('', [Validators.required]),
      idVuelo: new FormControl(this.vuelo.id, [Validators.required]),
      tipoIdentificacion: new FormControl('', [Validators.required, Validators.minLength(LONGITUD_PERMITIDA_TIPO_IDENTIFICACION),
      Validators.maxLength(LONGITUD_PERMITIDA_TIPO_IDENTIFICACION)]),
      numeroIdentificacion: new FormControl('', [Validators.required, Validators.minLength(LONGITUD_MINIMA_PERMITIDA_NUMERO_IDENTIFICACION)]),
      pasajeros: new FormControl(1, [Validators.required]),
      valorTotal: new FormControl(this.vuelo.valorBase, [Validators.required]),
      activa: new FormControl(true, [Validators.required]),
      token: new FormControl('', [Validators.required]),
    });
  }

  crear() {
    this.reservaService.guardar(this.reservaForm.value).subscribe(
      response => console.log("ID", response)
    )
  }

}
