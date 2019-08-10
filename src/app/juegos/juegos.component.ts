import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-juegos',
  templateUrl: './juegos.component.html',
  styleUrls: ['./juegos.component.scss']
})
export class JuegosComponent implements OnInit {

  juegos=[
    ['Forza Horizon', 'The Crew 2', 'Dirt 4', 'NFS Rivals'], 
    ['Call Of Duty', 'Battlefield', 'Gears of war'], 
    ['GTA 5', 'Watch Dogs 2', 'Days Gone'], 
    ['League Of Legends', 'Dota']
  ]
  selected=[]
  constructor(public router:Router, public activa:ActivatedRoute) { 
    activa.params.subscribe(data=>{
      this.selected=this.juegos[data.id]
    })
  }

  ngOnInit() {
  }

}
