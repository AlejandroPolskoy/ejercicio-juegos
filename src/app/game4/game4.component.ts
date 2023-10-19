import { Component } from '@angular/core';

@Component({
  selector: 'app-game4',
  templateUrl: './game4.component.html',
  styleUrls: ['./game4.component.scss']
})
export class Game4Component {
  cols:number = 4;
  rows:number = 4;
  game:any;
  tesoro:number[] = [0,0];

  chest = "./assets/exercise-4/chest.png";
  skull ="./assets/exercise-4/skull.png";
  x = "./assets/exercise-4/x.png";

  start() {
    this.game = [];
    this.tesoro[0] = this.getRandom( this.rows );
    this.tesoro[1] = this.getRandom( this.cols );

    for(let i=0; i<this.rows; i++) {
      this.game[i] = [];
      for(let j=0; j<this.cols; j++) {
        this.game[i][j] = [];
        this.game[i][j][0] = i == this.tesoro[0] && j == this.tesoro[1];
        this.game[i][j][1] = false;
      }
    }
  }

  clicked( id:number, id2:number) {
    this.game[id][id2][1] = true;
    if(this.game[id][id2][0]) {
      setTimeout(() => {
        alert("Found it!");
      }, 100);
    }
  }

  getRandom( num:number ) {
    return Math.floor(Math.random() * (num))
  }

}
