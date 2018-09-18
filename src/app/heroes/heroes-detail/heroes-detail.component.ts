import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../shared/hero.model';

@Component({
  selector: 'app-heroes-detail',
  templateUrl: './heroes-detail.component.html',
  styleUrls: ['./heroes-detail.component.css']
})
export class HeroesDetailComponent implements OnInit {

  @Input() heroSelected: Hero;

  constructor() { }

  ngOnInit() {
  }

}
