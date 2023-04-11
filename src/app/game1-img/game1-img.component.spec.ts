import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Game1ImgComponent } from './game1-img.component';

describe('Game1ImgComponent', () => {
  let component: Game1ImgComponent;
  let fixture: ComponentFixture<Game1ImgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Game1ImgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Game1ImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
