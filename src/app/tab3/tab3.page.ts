import { Component } from '@angular/core';
import { Hero } from './class/hero';
import { FlyingHero } from './class/fluinghero';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  allHero: Hero[] = [];
  constructor() {
    let hero1 = new Hero("кінь", 1, 25);
    hero1.show();
    hero1.run();
    this.allHero.push(hero1);
    let hero2 = new FlyingHero("пегас", 2, "крила", 50, 15);
    hero2.show();
    hero2.run();
    hero2.fly();
    this.allHero.push(hero2);
  }
  addFlyingHero(name, power, fm, fs, speed) {
    let hero = new FlyingHero(name, power, fm, fs, speed);
    hero.show();
    hero.run();
    hero.fly();
    this.allHero.push(hero);

  }

}
