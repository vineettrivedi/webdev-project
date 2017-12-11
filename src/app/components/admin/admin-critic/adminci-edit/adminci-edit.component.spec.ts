import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminciEditComponent } from './adminci-edit.component';

describe('AdminciEditComponent', () => {
  let component: AdminciEditComponent;
  let fixture: ComponentFixture<AdminciEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminciEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminciEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
