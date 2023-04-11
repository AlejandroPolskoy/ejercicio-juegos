import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameTresComponent } from './game-tres.component';

describe('GameTresComponent', () => {
  let component: GameTresComponent;
  let fixture: ComponentFixture<GameTresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameTresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameTresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
