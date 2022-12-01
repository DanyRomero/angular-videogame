import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideogameEditFormComponent } from './videogame-edit-form.component';

describe('VideogameEditFormComponent', () => {
  let component: VideogameEditFormComponent;
  let fixture: ComponentFixture<VideogameEditFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideogameEditFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideogameEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
