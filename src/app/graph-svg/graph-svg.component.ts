import {Component, Input, OnInit} from '@angular/core';
import {Link} from '../link';
import {Node} from '../node';

@Component({
  selector: 'graph',
  templateUrl: './graph-svg.component.html',
  styleUrls: ['./graph-svg.component.css']
})
export class GraphSvgComponent implements OnInit {

  @Input()
  links: Link[];

  @Input()
  nodes: Node;

  options: { width: number, height: number } = {
    height: 4000,
    width: 4000
  };

  constructor() {
  }

  ngOnInit() {
  }

}
