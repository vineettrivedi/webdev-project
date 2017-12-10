import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageCreateComponent } from './image-create.component';

describe('ImageCreateComponent', () => {
  let component: ImageCreateComponent;
  let fixture: ComponentFixture<ImageCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
