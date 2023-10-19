import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameWhackComponent } from './game-whack.component';

describe('GameWhackComponent', () => {
  let component: GameWhackComponent;
  let fixture: ComponentFixture<GameWhackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameWhackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameWhackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
