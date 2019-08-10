import { DetalleUsuarioComponent } from './detalle-usuario/detalle-usuario.component';
import { JuegosComponent } from './juegos/juegos.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetallesComponent } from './detalles/detalles.component';
import { HomeComponent } from './home/home.component';
import { RegistroComponent } from './registro/registro.component';


const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:"details", component:DetallesComponent},
  {path:"juegos/:id", component:JuegosComponent},
  {path:"registro", component:RegistroComponent},
  {path:"detalleusuario", component:DetalleUsuarioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
