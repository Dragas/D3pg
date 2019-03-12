import {Component, Input, OnInit} from '@angular/core';
import {Node} from '../node';

@Component({
  selector: '[nodeVisual]',
  templateUrl: './node-svg.component.html',
  styleUrls: ['./node-svg.component.css']
})
export class NodeSvgComponent implements OnInit {

  @Input('nodeVisual')
  node: Node;

  constructor() {
  }

  ngOnInit() {
  }

  getTranslateString(): string {
    return `translate(${this.node.x}, ${this.node.y})`;
  }
}
