import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridHeroesComponent } from './grid-heroes.component';

describe('GridHeroesComponent', () => {
  let component: GridHeroesComponent;
  let fixture: ComponentFixture<GridHeroesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridHeroesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GridHeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
