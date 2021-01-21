// import { browser, logging } from 'protractor';
import { NavbarPage } from '../page/navbar/navbar.po';
import { AppPage } from '../app.po';
import { ReservaPage } from '../page/reserva/reserva.po';

describe('workspace-project Producto', () => {
    let page: AppPage;
    let navBar: NavbarPage;
    let reserva: ReservaPage;

    beforeEach(() => {
        page = new AppPage();
        navBar = new NavbarPage();
        reserva = new ReservaPage();
    });

    it('Deberia consultar vuelos', () => {
        const CIUDAD_ORIGEN = 'pereira';
        const CIUDAD_DESTINO = 'medellin';
        const FECHA = '12/01/2020';

        page.navigateTo();
        navBar.clickBotonReserva();
        reserva.ingresarCiudadOrigen(CIUDAD_ORIGEN);
        reserva.ingresarCiudadDestino(CIUDAD_DESTINO);
        reserva.ingresarFecha(FECHA);
        reserva.clickBotonConsultarVuelos();

        expect(1).toBeLessThan(reserva.contarVuelos());
    });

    // it('Deberia listar productos', () => {
    //     page.navigateTo();
    //     navBar.clickBotonProductos();
    //     producto.clickBotonListarProductos();

    //     expect(4).toBe(producto.contarProductos());
    // });
});
