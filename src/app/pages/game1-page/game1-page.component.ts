import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game1-page',
  templateUrl: './game1-page.component.html',
  styleUrls: ['./game1-page.component.scss']
})
export class Game1PageComponent implements OnInit{
  cardArray = [
    {
      id: 1,
      name: "earth",
      img: "./assets/imagenes_planetas/earth.svg",
      clicked: false,
      ticked: false,
    },
    {
      id: 2,
      name: "jupiter",
      img: "./assets/imagenes_planetas/jupiter.svg",
      clicked: false,
      ticked: false,
    },
    {
      id: 3,
      name: "mars",
      img: "./assets/imagenes_planetas/mars.svg",
      clicked: false,
      ticked: false,
    },
    {
      id: 4,
      name: "mercury",
      img: "./assets/imagenes_planetas/mercury.svg",
      clicked: false,
      ticked: false,
    },
    {
      id: 5,
      name: "saturn",
      img: "./assets/imagenes_planetas/saturn.svg",
      clicked: false,
      ticked: false,
    },
    {
      id: 6,
      name: "uranus",
      img: "./assets/imagenes_planetas/uranus.svg",
      clicked: false,
      ticked: false,
    },
    {
      id: 7,
      name: "earth",
      img: "./assets/imagenes_planetas/earth.svg",
      clicked: false,
      ticked: false,
    },
    {
      id: 8,
      name: "jupiter",
      img: "./assets/imagenes_planetas/jupiter.svg",
      clicked: false,
      ticked: false,
    },
    {
      id: 9,
      name: "mars",
      img: "./assets/imagenes_planetas/mars.svg",
      clicked: false,
      ticked: false,
    },
    {
      id: 10,
      name: "mercury",
      img: "./assets/imagenes_planetas/mercury.svg",
      clicked: false,
      ticked: false,
    },
    {
      id: 11,
      name: "saturn",
      img: "./assets/imagenes_planetas/saturn.svg",
      clicked: false,
      ticked: false,
    },
    {
      id: 12,
      name: "uranus",
      img: "./assets/imagenes_planetas/uranus.svg",
      clicked: false,
      ticked: false,
    },
  ];

  back:string = "./assets/imagenes_planetas/universe.svg";
  tick:string = "./assets/imagenes_planetas/tick.svg";

  game:any = [];

  before:any;
  current:any;
  count = 0;
  total = 12;

  ngOnInit(): void {
    const arrayz = [...this.cardArray]
    this.game = [];
    for(let i=0; i<12; i++) {
      this.game.push( arrayz.splice( this.getRandom( this.total - i ), 1 )[0] );
    }
  }

  card_clicked( index:number) {
    if(this.current) { return }
    this.game[ index ].clicked = true;

    if(this.before) {
      this.current = index;
      if(this.game[index].name == this.before.name) {
        setTimeout(()=> {
          this.game[index].ticked = true;
          this.before.ticked = true;
          this.count += 2;
          this.clear( index );
        }, 1000)
      } else {
        setTimeout(()=> {
          this.clear( index );
        }, 1000)
      }
    } else {
      this.before = this.game[index];
    }
  }

  clear( index:number ) {
    this.game[ index ].clicked = false;
    this.before.clicked = false;
    this.before = null;
    this.current = null;
    if(this.count >= this.total) {
      alert("GAME OVER");
    }
  }

  getRandom( num:number ) {
    return Math.floor(Math.random() * (num))
  }
}
