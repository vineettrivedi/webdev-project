import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmincoListComponent } from './adminco-list.component';

describe('AdmincoListComponent', () => {
  let component: AdmincoListComponent;
  let fixture: ComponentFixture<AdmincoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmincoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmincoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
