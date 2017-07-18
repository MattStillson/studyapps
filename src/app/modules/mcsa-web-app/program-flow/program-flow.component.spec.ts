import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramFlowComponent } from './program-flow.component';

describe('ProgramFlowComponent', () => {
  let component: ProgramFlowComponent;
  let fixture: ComponentFixture<ProgramFlowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgramFlowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramFlowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
