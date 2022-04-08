import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Heroe, HeroesService } from 'src/app/servicios/heroes.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

    heroes: any = {};
    termino: string = '';

    constructor( private activatedRoute: ActivatedRoute,
                 private _heroesService: HeroesService,
                 private router: Router) {}
    ngOnInit(){
        this.activatedRoute.params.subscribe( params => {
            this.termino = params['termino'];
            this.heroes = this._heroesService.buscarHeroes(params['termino']);
        });
    }
    // verHeroe(id: number){
    //     this.router.navigate(['/heroe/' + id]);
    // }

}
