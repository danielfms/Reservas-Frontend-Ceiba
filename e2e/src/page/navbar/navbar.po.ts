import { by, element } from 'protractor';

export class NavbarPage {
    linkReserva = element(by.xpath('/html/body/app-root/app-navbar/nav/a[1]'));

    async clickBotonReserva() {
        await this.linkReserva.click();
    }
}
