import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})


export class HeroComponent {

  public name: string = "ironman"
  public age: number = 45


  //get es como una propiedad, pero que es un  metodo, para interoplar {{}}
  get capitalizedName():string{
    return this.name.toUpperCase()
  }

  public getHeroDescription():string{
    return `${ this.name } - ${ this.age} `
  }


  public changeHero(){
    this.name = 'Thor'
  }

  public changeAge(){
    this.age = 32
  }

  public resetForm(){
    this.name = 'ironman'
    this.age = 45
  }
}
