
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';

import  Hero from '../../models/Hero'
import { HeroService } from '../../service/HeroService';

@Component({
    moduleId: String(module.id),
    selector: 'hero-detail',
    templateUrl: './heroDetail.html',
    styleUrls: ['./heroDetail.css']
})
export class HeroDetailComponent implements OnInit {


    hero: Hero;

    constructor(
        private heroService: HeroService,
        private route: ActivatedRoute,
        private location: Location
    ) {

    }

    ngOnInit () {
        this.route.params
            .switchMap((params: Params) => this.heroService.getHero(+params['id']))
            .subscribe(hero => this.hero = hero);
    }




}
