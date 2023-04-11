import { Component, EventEmitter, Output } from '@angular/core';
import { IRecord } from '../shared/interfaces/record.interface';

@Component({
  selector: 'app-albums-form',
  templateUrl: './albums-form.component.html',
  styleUrls: ['./albums-form.component.scss']
})
export class AlbumsFormComponent {
  @Output() newAlbum = new EventEmitter();
  album:IRecord = {
    name: '',
    band: '',
    img: ''
  }

  sendNewAlbum() {
    this.newAlbum.emit({...this.album});
  }
}
