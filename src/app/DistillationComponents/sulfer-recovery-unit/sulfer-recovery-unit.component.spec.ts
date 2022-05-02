import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SulferRecoveryUnitComponent } from './sulfer-recovery-unit.component';

describe('SulferRecoveryUnitComponent', () => {
  let component: SulferRecoveryUnitComponent;
  let fixture: ComponentFixture<SulferRecoveryUnitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SulferRecoveryUnitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SulferRecoveryUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
