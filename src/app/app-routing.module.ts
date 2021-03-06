import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { SecurityGuard } from '@core/guard/security.guard';
// import { HomeComponent } from '@home/home.component';


const routes: Routes = [
  {  path: '', redirectTo: '/reserva/disponibilidad', pathMatch: 'full' },
  { path: 'reserva', loadChildren: () => import('@reserva/reserva.module').then(mod => mod.ReservaModule) },
  { path: 'avion', loadChildren: () => import('@avion/avion.module').then(mod => mod.AvionModule) },
  { path: 'destino', loadChildren: () => import('@destino/destino.module').then(mod => mod.DestinoModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
