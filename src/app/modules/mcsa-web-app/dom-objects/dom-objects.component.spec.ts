import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DomObjectsComponent } from './dom-objects.component';

describe('DomObjectsComponent', () => {
  let component: DomObjectsComponent;
  let fixture: ComponentFixture<DomObjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DomObjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DomObjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
