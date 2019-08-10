import { DataServiceService } from './services/data-service.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { DetallesComponent } from './detalles/detalles.component';
import { HomeComponent } from './home/home.component';
import { JuegosComponent } from './juegos/juegos.component';
import { RegistroComponent } from './registro/registro.component';
import { FormsModule } from '@angular/forms';
import { DetalleUsuarioComponent } from './detalle-usuario/detalle-usuario.component';


@NgModule({
  declarations: [
    AppComponent,
    DetallesComponent,
    HomeComponent,
    JuegosComponent,
    RegistroComponent,
    DetalleUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    HttpClientModule
  ],
  providers: [DataServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
