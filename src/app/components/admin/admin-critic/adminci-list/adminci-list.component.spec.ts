import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminciListComponent } from './adminci-list.component';

describe('AdminciListComponent', () => {
  let component: AdminciListComponent;
  let fixture: ComponentFixture<AdminciListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminciListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminciListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
