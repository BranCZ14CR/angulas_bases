import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})


export class ListComponent {

  public heroesNames: string[] = ['Spiderman', 'Hulk', 'Thor', 'Antman']
  public heroeEliminado?: string;

  borrarUltimoHeroe():void{
    this.heroeEliminado = this.heroesNames.pop();
  }
}
