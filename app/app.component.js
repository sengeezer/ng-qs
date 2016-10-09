"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var Hero = (function () {
    function Hero() {
    }
    return Hero;
}());
exports.Hero = Hero;
var HEROES = [
    {
        id: 11,
        name: 'Mr. Nicer'
    },
    {
        id: 12,
        name: 'Narcos'
    },
    {
        id: 13,
        name: 'Bombastic'
    },
    {
        id: 14,
        name: 'Celebrittas'
    },
    {
        id: 15,
        name: 'Magnet B'
    },
    {
        id: 16,
        name: 'OseMan'
    },
    {
        id: 17,
        name: 'Dynamita'
    },
    {
        id: 18,
        name: 'Dr UP'
    },
    {
        id: 19,
        name: 'Magman'
    },
    {
        id: 20,
        name: 'Sandwich'
    }
];
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Tour of Heroes';
        this.heroes = HEROES;
    }
    AppComponent.prototype.onSelect = function (hero) {
        this.selectedHero = hero;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n    <h1>{{title}}</h1>\n    <h2>My Heroes</h2>\n    <ul class=\"heroes\">\n      <li *ngFor=\"let hero of heroes\" [class.selected]=\"hero === selectedHero\" (click)=\"onSelect(hero)\">\n        <span class=\"badge\">{{hero.id}}</span>\n        {{hero.name}}\n      </li>\n    </ul>\n    <div *ngIf=\"selectedHero\">\n      <h2>{{selectedHero.name}} details</h2>\n      <div>\n        <label>id: </label>{{selectedHero.id}}\n      </div>\n      <div>\n        <label>name: </label>\n        <input [(ngModel)]=\"selectedHero.name\" placeholder=\"name\">\n      </div>\n    </div>\n    ",
            styles: ["\n      .selected {\n        background-color: #cfd8dc !important;\n        color: #fff;\n      }\n\n      .heroes {\n        margin: 0 0 2em;\n        list-style-type: none;\n        padding: 0;\n        width: 15em;\n      }\n\n      .heroes li {\n        cursor: pointer;\n        position: relative;\n        left: 0;\n        background-color: #eee;\n        margin: .5em;\n        padding: .3em 0;\n        height: 1.6em;\n        border-radius: 4px;\n      }\n\n      .heroes li.selected:hover {\n        background-color: #bbd8dc !important;\n        color: #fff;\n      }\n\n      .heroes li:hover {\n        color: #607d8b;\n        background-color: #ddd;\n        left: .1em;\n      }\n\n      .heroes .text {\n        position: relative;\n        top: -3px;\n      }\n\n      .heroes .badge {\n        display: inline-block;\n        font-size: small;\n        color: white;\n        padding: 0.8em 0.7em 0 0.7em;\n        background-color: #607d8b;\n        line-height: 1em;\n        position: relative;\n        left: -1px;\n        top: -4px;\n        height: 1.8em;\n        margin-right: .8em;\n        border-radius: 4px 0 0 4px;\n      }\n    "]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map