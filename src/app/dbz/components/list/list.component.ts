import { Character } from './../../interfaces/character.interface';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { DbzServices } from '../../services/dbz.service';

@Component({
  selector:     'dbz-list',
  templateUrl:  './list.component.html',
  styleUrl:     './list.component.css',
})

export class ListComponent {

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  @Input()
  public characterList: Character[] = [{
    name: 'Trunks',
    power: 10
  }]


  onDeletCharacter(id?: string):void{
    if(!id) return;
    this.onDelete.emit(id);
  }

}
