import { Component, OnInit } from '@angular/core';
import { Hero } from '../heros';
import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html', //the location of the component's template file.
  styleUrls: ['./heroes.component.css'], //the location of the component's private CSS styles.
})
export class HeroesComponent implements OnInit {
  constructor(
    private heroService: HeroService,
    private messageService: MessageService
  ) {}

  // heroes = HEROES;
  heroes: Hero[];

  selectedHero: Hero;

  ngOnInit(): void {
    this.getHeroes();
    // is a lifecycle hook    It's a good place to put initialization logic.
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }
  getHeroes(): void {
    this.heroService
      .fetchHeroes()
      .subscribe((heroes) => (this.heroes = heroes));
  }

  // getHeroes(): void {
  //   this.heroes = this.heroService.getHeroes();
  // }
}
