import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideogameMainPageComponent } from './videogame-main-page.component';

describe('VideogameMainPageComponent', () => {
  let component: VideogameMainPageComponent;
  let fixture: ComponentFixture<VideogameMainPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideogameMainPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideogameMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
