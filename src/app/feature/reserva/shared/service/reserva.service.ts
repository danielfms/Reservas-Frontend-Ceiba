import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { environment } from 'src/environments/environment';
import { Reserva } from '../model/Reserva';

@Injectable({
  providedIn: 'root'
})
export class ReservaService {

  constructor(protected http: HttpService) {}

  public guardar(reserva: Reserva) {
    console.log(`${environment.endpoint}/reservas`, reserva)
    return this.http.doPost<Reserva, number>(`${environment.endpoint}/reservas`, reserva);
  }

  public consultar() {
    console.log(`${environment.endpoint}/reservas`)
    return this.http.doGet<Reserva[]>(`${environment.endpoint}/reservas`);
  }
}
