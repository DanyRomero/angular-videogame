import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopDevelopersComponent } from './top-developers.component';

describe('TopDevelopersComponent', () => {
  let component: TopDevelopersComponent;
  let fixture: ComponentFixture<TopDevelopersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopDevelopersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopDevelopersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
