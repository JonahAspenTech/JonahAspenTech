import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IsomerizationUnitComponent } from './isomerization-unit.component';

describe('IsomerizationUnitComponent', () => {
  let component: IsomerizationUnitComponent;
  let fixture: ComponentFixture<IsomerizationUnitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IsomerizationUnitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IsomerizationUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
