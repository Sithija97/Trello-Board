import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TWayDBindComponent } from './tway-dbind.component';

describe('TWayDBindComponent', () => {
  let component: TWayDBindComponent;
  let fixture: ComponentFixture<TWayDBindComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TWayDBindComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TWayDBindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
