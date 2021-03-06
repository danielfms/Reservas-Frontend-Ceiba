export class Vuelo {
    id: number;
    idDestino: number;
    idAvion: number;
    fecha: Date;
    duracion: number;
    ciudadOrigen: string;
    ciudadDestino: string;
    matriculaAvion: string;
    valorBase: number;


    constructor(id: number, idDestino: number, idAvion: number, fecha: Date, duracion: number, ciudadOrigen: string,
        ciudadDestino: string,  matriculaAvion: string, valorBase:number) {
        this.id = id;
        this.idDestino = idDestino;
        this.idAvion = idAvion;
        this.fecha = fecha;
        this.duracion = duracion;
        this.ciudadOrigen = ciudadOrigen;
        this.ciudadDestino = ciudadDestino;
        this.matriculaAvion = matriculaAvion;
        this.valorBase = valorBase;
    }

}
