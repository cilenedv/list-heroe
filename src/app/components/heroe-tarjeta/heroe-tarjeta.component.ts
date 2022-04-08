import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Heroe, HeroesService } from 'src/app/servicios/heroes.service';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css']
})

export class HeroeTarjetaComponent   {

   @Input() heroe: any ={};
   @Input() id: number = 1;

//    @Output() hereoSeleccionado: EventEmitter<number> = new EventEmitter();

  constructor(  private _heroesService: HeroesService,
                private router: Router) {
                }

  verHeroe(){
    console.log(this.id);
    this.router.navigate(['/heroe/' +this.id]);
    // this.hereoSeleccionado.emit(this.id);
  }

}
