import { Component } from '@angular/core';

export class Hero {
  id: number;
  name: string;
}

const HEROES: Hero[] = [
  { id: 11, name: 'Mr. Vice' },
  { id: 12, name: 'Barco' },
  { id: 13, name: 'Lombasto' },
  { id: 14, name: 'Celebrittas' },
  { id: 15, name: 'Mangenta' },
  { id: 16, name: 'PolymerMan' },
  { id: 17, name: 'Dynamos' },
  { id: 18, name: 'Dr English' },
  { id: 19, name: 'Magman' },
  { id: 20, name: 'Brushnado' }
];

@Component({
  selector: 'my-app',
  template:`
  <h1>{{title}}</h1>
  <h2>My Heroes</h2>
  <ul class="heroes">
    <li *ngFor="let hero of heroes" (click)="onSelect(hero)" [class.selected]="hero === selectedHero">
      <span class="badge">{{hero.id}}</span> {{hero.name}}
    </li>
  </ul>

  <div *ngIf="selectedHero">
    <h2>{{selectedHero.name}} details:</h2>
    <div>
      <label>id: </label>{{selectedHero.id}}
    </div>
    <div>
      <label>name: </label>
      <input [(ngModel)]="selectedHero.name" placeholder="name"/>
    </div>
  </div>
  `,
  styles: [`
  .selected {
    background-color: #cfd8dc !important;
    color: #fff;
  }
  .heroes {
    margin: 0 0 2em;
    list-style-type: none;
    padding: 0;
    width: 15em;
  }
  .heroes li {
    cursor: pointer;
    position: relative;
    left: 0;
    background-color: #eee;
    margin: .5em;
    padding: .3em 0;
    height: 1.6em;
    border-radius: 4px;
  }
  .heroes li.selected:hover {
    background-color: #bbd8dc !important;
    color: #fff;
  }
  .heroes li:hover {
    color: #607d8b;
    background-color: #ddd;
    left: .1em;
  }
  .heroes .text {
    position: relative;
    top: -3px;
  }
  .heroes .badge {
    display: inline-block;
    font-size: small;
    color: #fff;
    padding: 0.8em 0.7em 0 0.7em;
    background-color: #607d8b;
    line-height: 1em;
    position: relative;
    left: -1px;
    top: -4px;
    height: 1.8em;
    margin-right: .8em;
    border-radius: 4px 0 0 4px;
  }
`]
})

export class AppComponent {
  title = 'Tour of Heroes';
  heroes = HEROES;
  selectedHero: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
