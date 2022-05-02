import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SemiRegenerativeReformerComponent } from './semi-regenerative-reformer.component';

describe('SemiRegenerativeReformerComponent', () => {
  let component: SemiRegenerativeReformerComponent;
  let fixture: ComponentFixture<SemiRegenerativeReformerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SemiRegenerativeReformerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SemiRegenerativeReformerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
