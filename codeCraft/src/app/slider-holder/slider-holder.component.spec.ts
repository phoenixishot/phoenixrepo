import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderHolderComponent } from './slider-holder.component';

describe('SliderHolderComponent', () => {
  let component: SliderHolderComponent;
  let fixture: ComponentFixture<SliderHolderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SliderHolderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderHolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
