import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TocoComponent } from './toco.component';

describe('TocoComponent', () => {
  let component: TocoComponent;
  let fixture: ComponentFixture<TocoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TocoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TocoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
