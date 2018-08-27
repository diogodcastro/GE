import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovementRecordsComponent } from './movement-records.component';

describe('MovementRecordsComponent', () => {
  let component: MovementRecordsComponent;
  let fixture: ComponentFixture<MovementRecordsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovementRecordsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovementRecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
