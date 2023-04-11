import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Game3PageComponent } from './game3-page.component';

describe('Game3PageComponent', () => {
  let component: Game3PageComponent;
  let fixture: ComponentFixture<Game3PageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Game3PageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Game3PageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
