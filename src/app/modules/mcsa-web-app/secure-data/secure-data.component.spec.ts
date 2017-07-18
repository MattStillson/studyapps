import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecureDataComponent } from './secure-data.component';

describe('SecureDataComponent', () => {
  let component: SecureDataComponent;
  let fixture: ComponentFixture<SecureDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecureDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecureDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
