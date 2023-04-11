import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-game1-img',
  templateUrl: './game1-img.component.html',
  styleUrls: ['./game1-img.component.scss']
})
export class Game1ImgComponent {
  @Input() card = {
    id: 0,
    img: '',
    name: ''
  }

  clicked:boolean = false;
  ticked:boolean = false;

  
}
