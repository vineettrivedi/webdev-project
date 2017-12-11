import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmincoCreateComponent } from './adminco-create.component';

describe('AdmincoCreateComponent', () => {
  let component: AdmincoCreateComponent;
  let fixture: ComponentFixture<AdmincoCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmincoCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmincoCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
