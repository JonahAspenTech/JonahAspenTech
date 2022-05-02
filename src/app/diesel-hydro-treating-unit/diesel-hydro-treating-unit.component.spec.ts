import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DieselHydroTreatingUnitComponent } from './diesel-hydro-treating-unit.component';

describe('DieselHydroTreatingUnitComponent', () => {
  let component: DieselHydroTreatingUnitComponent;
  let fixture: ComponentFixture<DieselHydroTreatingUnitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DieselHydroTreatingUnitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DieselHydroTreatingUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
