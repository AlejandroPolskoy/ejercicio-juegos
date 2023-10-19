import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LinksService {
  applist:any = [
    {
      name: "Memo",
      link: "/game1",
      img: "./assets/imagenes_planetas/universe.svg",
    },
    {
      name: "Who is who",
      link: "/game3",
      img: "./assets/exercise-3/022-man.svg",
    },
    {
      name: "Tesoro",
      link: "/game4",
      img: "./assets/exercise-4/chest.png",
    },
    {
      name: "Exchange",
      link: "/exchange/%3Fbase%3DEUR",
      img: "./assets/exchange/currency-exchange.avif",
    },
    {
      name: "Whack-a-Mole",
      link: "/whack",
      img: "./assets/whack/whach-hans.png",
    },
  ];

  constructor() { }

  getLinks() {
    return this.applist;
  }
}
