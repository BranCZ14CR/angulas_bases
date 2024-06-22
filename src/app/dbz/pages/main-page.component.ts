import { Character } from './../interfaces/character.interface';
import { Component } from '@angular/core';
import { DbzServices } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page-component.html'
})

export class MainPageComponent {

  constructor(private dbzServices: DbzServices ){

  }

  get characters(): Character[]{
    return [...this.dbzServices.characters];
  }

  onDeleteCharacter(id:string):void{
    this.dbzServices.deleteCharacterById(id);
  }

  onNewCharacter(character: Character): void{
    this.dbzServices.addCharacter(character);
  }
}
