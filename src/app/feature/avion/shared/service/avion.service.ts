import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { environment } from 'src/environments/environment';
import {Avion} from './../model/Avion';

@Injectable({
  providedIn: 'root'
})
export class AvionService {

  constructor(protected http: HttpService) {}

  public guardar(avion: Avion) {
    return this.http.doPost<Avion, boolean>(`${environment.endpoint}/aviones`, avion);
  }

  public eliminar(id: number) {
    return this.http.doDelete<boolean>(`${environment.endpoint}/aviones/${id}`);
  }

  public consultar() {
    console.log(`${environment.endpoint}/aviones`)
    return this.http.doGet<Avion[]>(`${environment.endpoint}/aviones`);
  }
}
