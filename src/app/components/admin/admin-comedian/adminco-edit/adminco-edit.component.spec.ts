import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmincoEditComponent } from './adminco-edit.component';

describe('AdmincoEditComponent', () => {
  let component: AdmincoEditComponent;
  let fixture: ComponentFixture<AdmincoEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmincoEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmincoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
