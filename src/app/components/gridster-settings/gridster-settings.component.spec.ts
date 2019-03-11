import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridsterSettingsComponent } from './gridster-settings.component';

describe('GridsterSettingsComponent', () => {
  let component: GridsterSettingsComponent;
  let fixture: ComponentFixture<GridsterSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridsterSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridsterSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
