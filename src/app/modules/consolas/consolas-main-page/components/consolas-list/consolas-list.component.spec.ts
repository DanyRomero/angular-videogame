import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsolasListComponent } from './consolas-list.component';

describe('ConsolasListComponent', () => {
  let component: ConsolasListComponent;
  let fixture: ComponentFixture<ConsolasListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsolasListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsolasListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
