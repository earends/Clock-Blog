import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateguestComponent } from './updateguest.component';

describe('UpdateguestComponent', () => {
  let component: UpdateguestComponent;
  let fixture: ComponentFixture<UpdateguestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateguestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateguestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
