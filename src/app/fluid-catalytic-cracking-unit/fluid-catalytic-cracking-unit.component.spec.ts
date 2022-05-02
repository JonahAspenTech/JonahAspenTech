import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FluidCatalyticCrackingUnitComponent } from './fluid-catalytic-cracking-unit.component';

describe('FluidCatalyticCrackingUnitComponent', () => {
  let component: FluidCatalyticCrackingUnitComponent;
  let fixture: ComponentFixture<FluidCatalyticCrackingUnitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FluidCatalyticCrackingUnitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FluidCatalyticCrackingUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
