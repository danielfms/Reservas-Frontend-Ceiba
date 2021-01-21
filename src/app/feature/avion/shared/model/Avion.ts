export class Avion {
    id: number;
    matricula: string;
    pasajeros: number;

    constructor(id: number, matricula: string, pasajeros:number) {
        this.id = id;
        this.matricula = matricula;
        this.pasajeros = pasajeros;
    }
}
