import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphSvgComponent } from './graph-svg.component';

describe('GraphSvgComponent', () => {
  let component: GraphSvgComponent;
  let fixture: ComponentFixture<GraphSvgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraphSvgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
