import { Component, OnInit } from '@angular/core';
import { IRecord } from '../shared/interfaces/record.interface';
import { CharactersService } from '../shared/services/characters.service';
import { ICharacters } from '../shared/interfaces/characters.interface';


@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit {
  listado2:any = [
    {
      name: "Meteora",
      band: "Linkin Park",
      img: ""
    }
  ]

  listado:any = [];
  page:number = 1;
  search!:string;

  constructor(private characterService: CharactersService) {}

  ngOnInit(): void {
    this.getListado();
  }

  addAlbum( item:IRecord ) {
    this.listado.push( item )
  }

  getListado( page: number = 1) {
    this.characterService.getCharacters( page ).subscribe( (data:any) => {
      this.listado = data.results;
    })
  }

  buscar() {
    this.characterService.doSearch( this.search ).subscribe( (data:any) => {
      this.listado = data.results;
    })
  }
  
}