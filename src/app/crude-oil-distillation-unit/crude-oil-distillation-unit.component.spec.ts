import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudeOilDistillationUnitComponent } from './crude-oil-distillation-unit.component';

describe('CrudeOilDistillationUnitComponent', () => {
  let component: CrudeOilDistillationUnitComponent;
  let fixture: ComponentFixture<CrudeOilDistillationUnitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudeOilDistillationUnitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudeOilDistillationUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
