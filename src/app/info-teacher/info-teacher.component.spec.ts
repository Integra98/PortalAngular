import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoTeacherComponent } from './info-teacher.component';

describe('InfoTeacherComponent', () => {
  let component: InfoTeacherComponent;
  let fixture: ComponentFixture<InfoTeacherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoTeacherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
