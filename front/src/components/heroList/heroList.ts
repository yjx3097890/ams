
import {Component, OnInit} from "@angular/core";
import { Observable } from 'rxjs';

import  Hero from '../../models/Hero';
import {HeroService} from '../../service/HeroService';


@Component({
    moduleId: String(module.id),
    selector: 'hero-list',
    templateUrl: './heroList.html',
    styleUrls: ['./heroList.css']
})
export class HeroListComponent implements OnInit{

    title = 'Tour of Heroes';
    heroes:Hero[];
    selectedHero: Hero;
    selectedId: number;

    constructor(
        private heroService: HeroService
    ) { }

    ngOnInit() {
       this.getHeroes().subscribe(heroes => {
               this.heroes = heroes;
               this.selectedHero = heroes.find((hero)=> this.selectedId === hero.id);
           }, error =>
           // TODO: real error handling
           console.log(error)
       );
    }

    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }


    getHeroes(): Observable<Hero[]> {
        return this.heroService.getMockHeroes();
    }

    addHero(name: string): void {
        name = name.trim();
        if (!name) { return; }
        this.heroService.create(name)
            .subscribe(hero => {
                this.heroes.push(hero);
                this.selectedHero = null;
            },
                error =>
                    // TODO: real error handling
                    console.log(error));
    }

    deleteHero(hero: Hero): void {
        this.heroService
            .del(hero.id)
            .subscribe(() => {
                this.heroes = this.heroes.filter(h => h !== hero);
                if (this.selectedHero === hero) { this.selectedHero = null; }
            },
                error =>
                    // TODO: real error handling
                    console.log(error));
    }

    gotoDetail(): void {

    }
}
