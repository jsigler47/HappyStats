import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HappyStatsComponent } from './happy-stats.component';

describe('HappyStatsComponent', () => {
  let component: HappyStatsComponent;
  let fixture: ComponentFixture<HappyStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HappyStatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HappyStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
