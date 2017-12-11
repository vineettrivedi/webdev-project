import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminciCreateComponent } from './adminci-create.component';

describe('AdminciCreateComponent', () => {
  let component: AdminciCreateComponent;
  let fixture: ComponentFixture<AdminciCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminciCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminciCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
