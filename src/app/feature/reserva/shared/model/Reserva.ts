export class Reserva {
    id: number;
    idVuelo: number;
    tipoIdentificacion: string;
    numeroIdentificacion: string;
    pasajeros: number;
    valorTotal: number;
    activa: boolean;
    token: string;
    
    constructor(id: number, idVuelo: number, tipoIdentificacion: string, numeroIdentificacion: string, pasajeros: number,
        valorTotal: number, activa: boolean,  token: string) {
        this.id = id;
        this.idVuelo = idVuelo;
        this.tipoIdentificacion = tipoIdentificacion;
        this.numeroIdentificacion = numeroIdentificacion;
        this.pasajeros = pasajeros;
        this.valorTotal = valorTotal;
        this.activa = activa;
        this.token = token;
    }


}
