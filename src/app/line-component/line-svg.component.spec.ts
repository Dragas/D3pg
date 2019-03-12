import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LineSvgComponent } from './line-svg.component';

describe('LineSvgComponent', () => {
  let component: LineSvgComponent;
  let fixture: ComponentFixture<LineSvgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LineSvgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LineSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
