import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent {
  curPage:number = 1;
  pageLimit = 100;
  @Output() newPage = new EventEmitter;

  nextPage() {
    if( this.curPage < this.pageLimit ) {
      this.curPage++;
      this.newPage.emit( this.curPage );
    }
  }

  prevPage() {
    if(this.curPage > 0) {
      this.curPage--;
      this.newPage.emit( this.curPage );
    }
  }
}
