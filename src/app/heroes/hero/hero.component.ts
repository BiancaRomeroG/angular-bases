import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name: string = 'Aquaman';
  public age: number = 30;

  get capitalizedName(): string{
    return this.name.toUpperCase();
  }

  getHeroeDescription(): string {
    return `${this.name} - ${this.age}`;
  }

  changeHeroName(): void {
    this.name = 'Spiderman';
  }

  changeHeroAge(): void {
    this.age = 25;
  }

  resetForm(): void {
    this.name = 'Aquaman';
    this.age = 30;
  }

}
