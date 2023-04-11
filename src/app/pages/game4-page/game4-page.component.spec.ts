import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Game4PageComponent } from './game4-page.component';

describe('Game4PageComponent', () => {
  let component: Game4PageComponent;
  let fixture: ComponentFixture<Game4PageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Game4PageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Game4PageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
