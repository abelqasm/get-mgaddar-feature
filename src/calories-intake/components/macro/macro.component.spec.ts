import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MacroComponent } from './macro.component';

describe('MacroComponent', () => {
  let component: MacroComponent;
  let fixture: ComponentFixture<MacroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MacroComponent]
    });
    fixture = TestBed.createComponent(MacroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
