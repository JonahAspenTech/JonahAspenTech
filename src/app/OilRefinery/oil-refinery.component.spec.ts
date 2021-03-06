import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShellAndTubeComponent } from './oil-refinery.component';

describe('ShellAndTubeComponent', () => {
  let component: ShellAndTubeComponent;
  let fixture: ComponentFixture<ShellAndTubeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShellAndTubeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShellAndTubeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
