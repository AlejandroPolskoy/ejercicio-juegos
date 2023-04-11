import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IRecord } from '../shared/interfaces/record.interface';
import { ICharacters } from '../shared/interfaces/characters.interface';

@Component({
  selector: 'app-albums-son',
  templateUrl: './albums-son.component.html',
  styleUrls: ['./albums-son.component.scss']
})
export class AlbumsSonComponent {
  // @Input() album:IRecord = {
  //   name: '',
  //   band: '',
  //   img: ''
  // }
  @Input() character!:ICharacters;
}
