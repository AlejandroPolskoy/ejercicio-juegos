import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Game1PageComponent } from './game1-page.component';

describe('Game1PageComponent', () => {
  let component: Game1PageComponent;
  let fixture: ComponentFixture<Game1PageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Game1PageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Game1PageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
