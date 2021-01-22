import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { environment } from 'src/environments/environment';
import { Destino } from '../model/Destino';

@Injectable({
  providedIn: 'root'
})
export class DestinoService {

  constructor(protected http: HttpService) {}

  public guardar(destino: Destino) {
    return this.http.doPost<Destino, boolean>(`${environment.endpoint}/destinos`, destino);
  }

  public eliminar(id: number) {
    return this.http.doDelete<boolean>(`${environment.endpoint}/destinos/${id}`);
  }

  public consultar() {
    console.log(`${environment.endpoint}/destinos`)
    return this.http.doGet<Destino[]>(`${environment.endpoint}/destinos`);
  }
}
