import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICharacters } from '../interfaces/characters.interface';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {
  url = "https://rickandmortyapi.com/api/character";

  constructor(private http: HttpClient) { }

  getCharacters( page: number = 1 ) {
    return this.http.get( this.url+'?page='+page );
  }

  getCharacterOnPage( page: number) {
    return this.http.get( this.url+'?page='+page );
  }

  getCharacter( id:string='1' ) {
    return this.http.get<ICharacters>( this.url+'/'+id );
  }

  doSearch( text:string ) {
    return this.http.get<ICharacters>( this.url+'?name='+text );
  }
}
