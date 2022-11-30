import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopConsolesComponent } from './top-consoles.component';

describe('TopConsolesComponent', () => {
  let component: TopConsolesComponent;
  let fixture: ComponentFixture<TopConsolesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopConsolesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopConsolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
