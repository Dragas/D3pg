import * as d3 from 'd3';
import {Node} from './node';

export class Link implements d3.SimulationLinkDatum<Node> {
  static squareMap = {
    true: {
      true: 1,
      false: 2
    },
    false: {
      true: 4,
      false: 3
    }
  };
  index: number;
  source: Node;
  target: Node;

  inverse: boolean = false;

  constructor(source: Node, target: Node, inverse) {
    this.source = source;
    this.target = target;
    this.inverse = inverse;
  }

  isInverse() {
    return this.inverse;
  }

  getSourceX() {
    return this.source.x + this.getXModifier();
  }

  getSourceY() {
    return this.source.y + this.getYModifier();
  }

  getDestinationX() {
    return this.target.x + this.getXModifier();
  }

  getDestinationY() {
    return this.target.y + this.getYModifier();
  }

  getModifier(): number {
    const modifier = this.getDistance();
    if (this.isInverse()) {
      return -modifier;
    }
    return modifier;
  }

  private getDistance() {
    return 5;
  }

  getXModifier(): number {
    if (this.source.x === this.target.x) {
      return this.getModifier();
    }
    return 0;
  }

  getYModifier(): number {
    if (this.source.y === this.target.y) {
      return this.getModifier();
    }
    if (this.source.y !== this.target.y && this.source.x !== this.target.x) {
      return this.getModifier();
    }
    return 0;
  }

  getAngle() {
    const xlen = (this.getDestinationX() - this.getSourceX());
    // inverse y axis because javascript rotates counter clockwise
    // because it should be clockwise instead
    const ylen = (this.getDestinationY() - this.getSourceY());
    const arrowLen = Math.sqrt(Math.pow(xlen, 2) + Math.pow(ylen, 2));
    const cosine = xlen / arrowLen;
    const sine = ylen / arrowLen;
    let angle = Math.asin(sine) * 180 / Math.PI;
    if (cosine === -1) {
      angle += 180;
    }
    else if (cosine < 0) {
      const sign = Math.abs(angle) / angle;
      angle += 90 * sign;
    }
    return angle;
  }
}
