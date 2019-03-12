import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NodeSvgComponent } from './node-svg.component';

describe('NodeSvgComponent', () => {
  let component: NodeSvgComponent;
  let fixture: ComponentFixture<NodeSvgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NodeSvgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NodeSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
