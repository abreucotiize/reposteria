import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-detalle-usuario',
  templateUrl: './detalle-usuario.component.html',
  styleUrls: ['./detalle-usuario.component.scss']
})
export class DetalleUsuarioComponent implements OnInit {
usuario={}
  constructor(public router:Router, public activa:ActivatedRoute) {

    activa.queryParams.subscribe(data=>{
      console.log(data);
      this.usuario=data
    })
   }

  ngOnInit() {
  }

}
