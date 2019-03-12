import {Component} from '@angular/core';
import {Link} from './link';
import {Node} from './node';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'd3pg';
  links: Link[] = [];
  nodes: Node[] = [];
  width = 3;
  height = 3;

  constructor() {
    for (let i = 0; i < this.width; i++) {
      for (let j = 0; j < this.height; j++) {
        const node = new Node(i + ',' + j);
        node.x = (i + 4) * 400;
        node.y = (j + 4) * 400;
        this.nodes.push(node);
      }
    }
    const nodes = this.nodes;
    this.links = nodes.map((it, index) => {
      index = this.nodes.indexOf(it);
      const heightidx = (index / this.height) | 0;
      const widthidx = (index % this.height) | 0;
      const links: Link[] = [];
      for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
          const absHeightIdx = heightidx + i;
          const absWidthIdx = widthidx + j;
          if (absHeightIdx < 0 || absWidthIdx < 0 || absWidthIdx >= this.width || absHeightIdx >= this.height) {
            continue;
          }
          const actualIndex = absHeightIdx * this.height + absWidthIdx;
          if (actualIndex === index) {
            continue;
          }
          const target = this.nodes[actualIndex];
          const inverse = actualIndex < index;
          const link = new Link(it, target, inverse);
          links.push(link);
        }
      }
      return links;
    }).reduce((previous, current) => previous.concat(current), []);
  }
}
