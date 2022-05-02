import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacuumDistillationUnitComponent } from './vacuum-distillation-unit.component';

describe('VacuumDistillationUnitComponent', () => {
  let component: VacuumDistillationUnitComponent;
  let fixture: ComponentFixture<VacuumDistillationUnitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VacuumDistillationUnitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VacuumDistillationUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
