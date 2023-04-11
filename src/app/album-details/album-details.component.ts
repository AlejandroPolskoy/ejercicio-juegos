import { Component, Input, OnInit } from '@angular/core';
import { ICharacters } from '../shared/interfaces/characters.interface';
import { CharactersService } from '../shared/services/characters.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.scss']
})
export class AlbumDetailsComponent implements OnInit{
  @Input() character:ICharacters = {
    id:'',
    name:'',
    image: '',
    status: '',
    species: '',
  };

  constructor(private characterService: CharactersService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      let charID = params.get('id');
      this.getCharacter( charID );
    });
  }

  getCharacter( id:any ) {
    this.characterService.getCharacter( id ).subscribe( (data) => { 
      this.character = data;
    });
  }
}
