import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Heroe, HeroesService } from 'src/app/servicios/heroes.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

    heroe: any = {};

  constructor(  private activatedRoute: ActivatedRoute,
                private _heroesService: HeroesService,
                private _location: Location) {

  }

  ngOnInit(): void {
    this.getHeroe();
  }
  getHeroe(): void {
    const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this._heroesService.getHeroe(id).subscribe(heroe => this.heroe = heroe);
    // this.activatedRoute.params.subscribe( params =>{
    //     this.heroe = this._heroesService.getHeroe( params['id'] );

    // });
  }

  goBack() {
    this._location.back();
    }

}
