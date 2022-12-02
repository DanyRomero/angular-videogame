import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideogameFiltersComponent } from './videogame-filters.component';

describe('VideogameFiltersComponent', () => {
  let component: VideogameFiltersComponent;
  let fixture: ComponentFixture<VideogameFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideogameFiltersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideogameFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
