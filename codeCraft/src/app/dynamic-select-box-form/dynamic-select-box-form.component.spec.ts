import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicSelectBoxFormComponent } from './dynamic-select-box-form.component';

describe('DynamicSelectBoxFormComponent', () => {
  let component: DynamicSelectBoxFormComponent;
  let fixture: ComponentFixture<DynamicSelectBoxFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicSelectBoxFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicSelectBoxFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
