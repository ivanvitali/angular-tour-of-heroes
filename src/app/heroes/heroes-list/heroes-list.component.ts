import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HeroService } from '../shared/hero.service';
import { Hero } from '../shared/hero.model';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.css']
})
export class HeroesListComponent implements OnInit {

  heroes: Hero[] = [];
  selectedHero: Hero = null;

  @Output() heroSelectedChanged: EventEmitter<Hero> = new EventEmitter;

  constructor( private heroService: HeroService ) { }

  ngOnInit() {
    this.heroService
      .getHeroes()
      .then((heroesArray) => {
      this.heroes = heroesArray;
    });
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.heroSelectedChanged.emit(hero);
  }

}
