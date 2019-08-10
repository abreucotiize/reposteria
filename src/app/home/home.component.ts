import { DataServiceService } from './../services/data-service.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  postres=[
// {nombre:"Tres leches", precio:"500", url:"https://saletard.com/wp/wp-content/uploads/2015/08/tresleches.jpg",
// ingredientes:["Azucar", "Leche condensada", "Leche calneshon", "Huevos", "Harina", "Polvo de hornear"],
// receta:`Preparar el Bizcocho: Calentar el horno a 180ºC. Enmantequillar un molde de torta de 25 cms de diámetro. Cernir la harina y los Polvos de Hornear Gourmet, reservar. Batir la mantequilla con el azúcar hasta que la mezcla esté bien cremosa. Agregar los huevos y la Esencia de Vainilla Gourmet y batir bien para integrar. Agregar la harina cernida de a dos cucharadas a la vez, mezclando bien después de cada adición. Poner la mezcla en el molde y hornear por 45 minutos.
// Preparar el relleno: poner todos los ingredientes en una olla. Cocinar a fuego medio, revolviendo constantemente hasta que la mezcla espese. Tiene que quedar como un manjar blanco. Juntar los ingredientes del remojo en un recipiente y revolver hasta incorporar bien. Cortar la torta en dos o tres capas. Poner la primera capa en un plato (donde se va a servir la torta)  y remojar de a cucharaditas sobre el queque con 1/3 de la mezcla de remojo. Poner la mitad de relleno, luego otra capa de queque. Remojar esta capa y luego poner el resto del relleno. Terminar con la última capa de queque y remojar. Ideal es tener la torta lista hasta este punto un día antes, reservada en el refrigerador.
// Preparar el merengue: Poner la claras y el azúcar en un bol y llevar a baño maría (sin que el bol esté en contacto con el agua) hasta que el azúcar se haya disuelto completamente. Sacar el bol de baño maría. Batir las claras hasta que el merengue esté duro y brillante (10 minutos aprox.). Una vez que el merengue esté frío, cubrir la torta con este merengue y servir.`},
  
// {nombre:"Brazo gitano", precio:"1500", url:"https://lacocinademercheborjas.com/wp-content/uploads/2019/05/BRAZO-DE-GITANO-5-1024x768-1024x768.jpg",
// ingredientes:["Azucar", "Leche condensada", "Leche calneshon", "Huevos", "Harina", "Polvo de hornear"],
// receta:`Preparar el Bizcocho: Calentar el horno a 180ºC. Enmantequillar un molde de torta de 25 cms de diámetro. Cernir la harina y los Polvos de Hornear Gourmet, reservar. Batir la mantequilla con el azúcar hasta que la mezcla esté bien cremosa. Agregar los huevos y la Esencia de Vainilla Gourmet y batir bien para integrar. Agregar la harina cernida de a dos cucharadas a la vez, mezclando bien después de cada adición. Poner la mezcla en el molde y hornear por 45 minutos.
// Preparar el relleno: poner todos los ingredientes en una olla. Cocinar a fuego medio, revolviendo constantemente hasta que la mezcla espese. Tiene que quedar como un manjar blanco. Juntar los ingredientes del remojo en un recipiente y revolver hasta incorporar bien. Cortar la torta en dos o tres capas. Poner la primera capa en un plato (donde se va a servir la torta)  y remojar de a cucharaditas sobre el queque con 1/3 de la mezcla de remojo. Poner la mitad de relleno, luego otra capa de queque. Remojar esta capa y luego poner el resto del relleno. Terminar con la última capa de queque y remojar. Ideal es tener la torta lista hasta este punto un día antes, reservada en el refrigerador.
// Preparar el merengue: Poner la claras y el azúcar en un bol y llevar a baño maría (sin que el bol esté en contacto con el agua) hasta que el azúcar se haya disuelto completamente. Sacar el bol de baño maría. Batir las claras hasta que el merengue esté duro y brillante (10 minutos aprox.). Una vez que el merengue esté frío, cubrir la torta con este merengue y servir.`},

// {nombre:"Flan", precio:"2500", url:"https://www.elheraldo.hn/csp/mediapool/sites/dt.common.streams.StreamServer.cls?STREAMOID=YE$G01Qb9r$wHH_4b0ow0M$daE2N3K4ZzOUsqbU5sYsXvkDwom3wYfkIE1VRJRQi6FB40xiOfUoExWL3M40tfzssyZqpeG_J0TFo7ZhRaDiHC9oxmioMlYVJD0A$3RbIiibgT65kY_CSDiCiUzvHvODrHApbd6ry6YGl5GGOZrs-&CONTENTTYPE=image/jpeg",
// ingredientes:["Azucar", "Leche condensada", "Leche calneshon", "Huevos", "Harina", "Polvo de hornear"],
// receta:`Preparar el Bizcocho: Calentar el horno a 180ºC. Enmantequillar un molde de torta de 25 cms de diámetro. Cernir la harina y los Polvos de Hornear Gourmet, reservar. Batir la mantequilla con el azúcar hasta que la mezcla esté bien cremosa. Agregar los huevos y la Esencia de Vainilla Gourmet y batir bien para integrar. Agregar la harina cernida de a dos cucharadas a la vez, mezclando bien después de cada adición. Poner la mezcla en el molde y hornear por 45 minutos.
// Preparar el relleno: poner todos los ingredientes en una olla. Cocinar a fuego medio, revolviendo constantemente hasta que la mezcla espese. Tiene que quedar como un manjar blanco. Juntar los ingredientes del remojo en un recipiente y revolver hasta incorporar bien. Cortar la torta en dos o tres capas. Poner la primera capa en un plato (donde se va a servir la torta)  y remojar de a cucharaditas sobre el queque con 1/3 de la mezcla de remojo. Poner la mitad de relleno, luego otra capa de queque. Remojar esta capa y luego poner el resto del relleno. Terminar con la última capa de queque y remojar. Ideal es tener la torta lista hasta este punto un día antes, reservada en el refrigerador.
// Preparar el merengue: Poner la claras y el azúcar en un bol y llevar a baño maría (sin que el bol esté en contacto con el agua) hasta que el azúcar se haya disuelto completamente. Sacar el bol de baño maría. Batir las claras hasta que el merengue esté duro y brillante (10 minutos aprox.). Una vez que el merengue esté frío, cubrir la torta con este merengue y servir.`},

// {nombre:"Pie de manzana", precio:"3500", url:"https://live.staticflickr.com/8657/16420015709_34d1b35257_b.jpg",
// ingredientes:["Azucar", "Leche condensada", "Leche calneshon", "Huevos", "Harina", "Polvo de hornear"],
// receta:`Preparar el Bizcocho: Calentar el horno a 180ºC. Enmantequillar un molde de torta de 25 cms de diámetro. Cernir la harina y los Polvos de Hornear Gourmet, reservar. Batir la mantequilla con el azúcar hasta que la mezcla esté bien cremosa. Agregar los huevos y la Esencia de Vainilla Gourmet y batir bien para integrar. Agregar la harina cernida de a dos cucharadas a la vez, mezclando bien después de cada adición. Poner la mezcla en el molde y hornear por 45 minutos.
// Preparar el relleno: poner todos los ingredientes en una olla. Cocinar a fuego medio, revolviendo constantemente hasta que la mezcla espese. Tiene que quedar como un manjar blanco. Juntar los ingredientes del remojo en un recipiente y revolver hasta incorporar bien. Cortar la torta en dos o tres capas. Poner la primera capa en un plato (donde se va a servir la torta)  y remojar de a cucharaditas sobre el queque con 1/3 de la mezcla de remojo. Poner la mitad de relleno, luego otra capa de queque. Remojar esta capa y luego poner el resto del relleno. Terminar con la última capa de queque y remojar. Ideal es tener la torta lista hasta este punto un día antes, reservada en el refrigerador.
// Preparar el merengue: Poner la claras y el azúcar en un bol y llevar a baño maría (sin que el bol esté en contacto con el agua) hasta que el azúcar se haya disuelto completamente. Sacar el bol de baño maría. Batir las claras hasta que el merengue esté duro y brillante (10 minutos aprox.). Una vez que el merengue esté frío, cubrir la torta con este merengue y servir.`}
]
cantidad=''
  constructor( public data:DataServiceService) { }
  users={}
  
  ngOnInit() {
    
  }

  solicitar(){
    console.log(this.cantidad);
    this.data.getUsers(this.cantidad).subscribe(data=>{
      this.users=data
      console.log(data);
    }); 
  }

}
