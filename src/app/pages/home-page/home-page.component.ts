import { Component } from '@angular/core';
import { LinksService } from 'src/app/shared/services/links.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {

  constructor(private linkService: LinksService) { }
  
  // name
  // link - /game423
  // img
  applist:any = [];

  ngOnInit():void {
    // get applist
    this.applist = this.linkService.getLinks();
  }
}
