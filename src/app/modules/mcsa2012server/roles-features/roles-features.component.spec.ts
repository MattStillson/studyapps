import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RolesFeaturesComponent } from './roles-features.component';

describe('RolesFeaturesComponent', () => {
  let component: RolesFeaturesComponent;
  let fixture: ComponentFixture<RolesFeaturesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RolesFeaturesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RolesFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
