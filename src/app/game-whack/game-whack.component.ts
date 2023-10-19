import { Component } from '@angular/core';

@Component({
  selector: 'app-game-whack',
  templateUrl: './game-whack.component.html',
  styleUrls: ['./game-whack.component.scss']
})
export class GameWhackComponent {
  score:number = 0;
  timeUp:boolean = true;
  time:number = 0;
  timeLimit:number = 30;    // game timer
  lifetime:number = 2;      // mole lifetime in seconds
  timers:any[] = [];
  scoreBoard:string = "0";
  holes:number[] = [
    0,
    0,
    0,
    0,
    0,
    0
  ];
  mole:any;

  ngOnInit():void {

  } 

  startGame() {
    if(this.timeUp === false) return;

    this.scoreBoard = "0";
    this.timeUp = false;
    this.score = 0;
    this.peep();
    setTimeout(() => {
        this.timeUp = true;
        alert("Game over");
        this.clearMole();
    }, this.timeLimit * 1000);
    this.time = this.timeLimit;
    let timer = setInterval(()=> {
      this.time--;
    }, 1000);
    this.timers.push(timer);
    //muestra topos aleatoriamente durante X segundos
  }

  launchMole( hole:number ) {
    let timer:number = this.getRandom( 500, 1500 );
    
    this.timers.push(window.setTimeout(() => {
        // this.holes[mole] = this.holes[mole] ? 0 : 1;
        this.holes[hole] = 1;
        this.mole = window.setTimeout(()=> {
          this.holes[hole] = 0;
          if(!this.timeUp) this.launchMole( this.getRandom(1, 6) );
        }, this.lifetime * 1000);
    }, timer));
  }

  getRandom(min:number, max:number):number {
    return (min + Math.floor(Math.random() * (max - min)));
  }

  peep() {
    let hole = this.getRandom(1, 6);
    this.launchMole( hole );
  }

  // hole - index in holes
  mole_onClick( hole:number) {
    if(this.holes[hole]) {
      this.holes[hole] = 0;
      this.refreshScore();
      clearTimeout(this.mole);
      this.peep();
    }
  }

  refreshScore():void {
    this.score++;
    this.scoreBoard = this.score.toString();
  }
  
  clearMole() {
    this.timers.forEach( timer => {
      clearTimeout( timer );
    })
    this.holes = [0,0,0,0,0,0];
    this.time = 0;
  }
}
