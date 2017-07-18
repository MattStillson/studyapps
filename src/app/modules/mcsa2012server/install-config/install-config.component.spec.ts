import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstallConfigComponent } from './install-config.component';

describe('InstallConfigComponent', () => {
  let component: InstallConfigComponent;
  let fixture: ComponentFixture<InstallConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstallConfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstallConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
