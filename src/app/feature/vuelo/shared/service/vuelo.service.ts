import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { environment } from 'src/environments/environment';
import { Vuelo } from '../model/Vuelo';

@Injectable({
  providedIn: 'root'
})
export class VueloService {

  constructor(protected http: HttpService) {}

  public consultar(ciudadOrigen: string, ciudadDestino: string, fecha: string) {
    console.log(`${environment.endpoint}/vuelos/${ciudadOrigen}/${ciudadDestino}/${fecha}`)
    return this.http.doGet<Vuelo[]>(`${environment.endpoint}/vuelos/${ciudadOrigen}/${ciudadDestino}/${fecha}`);
  }

  public consultarPorId(id: number) {
    console.log(`${environment.endpoint}/vuelos/${id}`)
    return this.http.doGet<Vuelo>(`${environment.endpoint}/vuelos/${id}`);
  }
}
