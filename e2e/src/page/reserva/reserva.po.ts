import { by, element } from 'protractor';

export class ReservaPage {
    private inputCiudadOrigen = element(by.id('ciudadOrigen'));
    private inputCiudadDestino = element(by.id('ciudadDestino'));
    private inputFecha = element(by.id('fecha'));
    private botonConsultarVuelos = element(by.id('consultarVuelos'));
    private listaVuelos = element.all(by.css('#tablaListadoVuelos tr'));
    private linkDisponibilidadReserva = element(by.id('linkDisponibilidadReserva'));

    async clickBotonConsultarVuelos() {
        await this.botonConsultarVuelos.click();
    }

    async clickLinkDisponibilidadReserva() {
        await this.linkDisponibilidadReserva.click();
    }

    async ingresarCiudadOrigen(ciudad) {
        await this.inputCiudadOrigen.sendKeys(ciudad);
    }

    async ingresarCiudadDestino(ciudad) {
        await this.inputCiudadDestino.sendKeys(ciudad);
    }

    async ingresarFecha(fecha) {
        await this.inputFecha.sendKeys(fecha);
    }

    async contarVuelos() {
        return this.listaVuelos.count();
    }

}
