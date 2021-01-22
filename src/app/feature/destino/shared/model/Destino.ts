export class Destino {
    id: number;
    ciudadOrigen: string;
    ciudadDestino: string;
    valorBase: number;


    constructor(id: number,  ciudadOrigen: string, ciudadDestino: string, valorBase:number) {
        this.id = id;
        this.ciudadOrigen = ciudadOrigen;
        this.ciudadDestino = ciudadDestino;
        this.valorBase = valorBase;
    }

}
