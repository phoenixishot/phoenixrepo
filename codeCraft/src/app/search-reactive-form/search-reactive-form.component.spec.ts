import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchReactiveFormComponent } from './search-reactive-form.component';

describe('SearchReactiveFormComponent', () => {
  let component: SearchReactiveFormComponent;
  let fixture: ComponentFixture<SearchReactiveFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchReactiveFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
