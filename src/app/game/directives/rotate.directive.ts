import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { RotationDirection } from 'src/app/game/directives/RotationDirection';

@Directive({
  selector: '[appRotate]'
})
export class RotateDirective implements OnInit {

  @Input()
  appRotate: RotationDirection;

  @Input()
  parentWidth: number;

  @Input()
  parentHeight: number;

  constructor(
    private el: ElementRef
  ) {}

  ngOnInit(): void {
    if(this.appRotate) {
      const style = this.el.nativeElement.style;
      style.width = this.parentHeight;
      style.height = this.parentWidth;

    }
  }

}
