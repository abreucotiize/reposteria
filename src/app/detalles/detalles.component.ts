import {Router, ActivatedRoute, Params} from '@angular/router';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.scss']
})
export class DetallesComponent implements OnInit {
  postre:{}
  constructor(public router:Router, public activa:ActivatedRoute) {

    activa.queryParams.subscribe(data=>{
      this.postre=data
    })

   }

  ngOnInit() {
  }

}
