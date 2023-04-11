import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumsSonComponent } from './albums-son.component';

describe('AlbumsSonComponent', () => {
  let component: AlbumsSonComponent;
  let fixture: ComponentFixture<AlbumsSonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlbumsSonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlbumsSonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
