import {Component, Input, OnInit} from '@angular/core';
import {Link} from '../link';

@Component({
  selector: '[lineVisual]',
  templateUrl: './line-svg.component.html',
  styleUrls: ['./line-svg.component.css']
})
export class LineSvgComponent implements OnInit {

  constructor() {
  }


  @Input('lineVisual')
  link: Link;

  ngOnInit() {
  }

  getPointsString() {
    const targetx = 0; //this.link.getDestinationX();
    const targety = 0; //this.link.getDestinationY();
    const dist = this.getDistance();
    const topPoint = (targetx + dist) + ',' + (targety);
    const leftPoint = (targetx - dist) + ',' + (targety - dist);
    const rightPoint = (targetx - dist) + ',' + (targety + dist);
    const middlePoint = (targetx) + ',' + (targety);
    return `${topPoint} ${leftPoint} ${middlePoint} ${rightPoint}`;
  }

  getDistance() {
    return 10;
  }

  getTransformString() {
    const angle = this.link.getAngle();
    const rotationX = this.link.getDestinationX();
    const rotationY = this.link.getDestinationY();
    const translationX = this.link.getDestinationX();
    const translationY = this.link.getDestinationY();
    return `translate(${translationX}, ${translationY})  rotate(${angle})`;
  }

  getTextX() {
    return this.link.getDestinationX() - 1.5 * (this.link.getDestinationX() - this.link.getSourceX()) / 2;
  }

  getTextY() {
    return this.link.getDestinationY() - 1.5 * (this.link.getDestinationY() - this.link.getSourceY()) / 2;
  }

  getText() {
    return Math.round(this.link.getAngle());
  }

  getTextTransformString() {
    return `rotate(${this.link.getAngle()}, ${this.getTextX()}, ${this.getTextY()})`;
  }
}
