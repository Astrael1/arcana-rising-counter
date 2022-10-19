import { AfterViewInit, Directive, ElementRef, Input } from '@angular/core';
import { RotationDirection } from 'src/app/game/directives/RotationDirection';

@Directive({
  selector: '[appRotate]'
})
export class RotateDirective implements AfterViewInit {

  @Input()
  appRotate: RotationDirection;

  constructor(
    private el: ElementRef
  ) {}

  ngAfterViewInit(): void {
    if(this.appRotate) {
      const parent: HTMLElement = this.el.nativeElement.parentElement;
      const style: CSSStyleDeclaration = this.el.nativeElement.style;

      if(this.appRotate === RotationDirection.RIGHT || this.appRotate === RotationDirection.LEFT) {
        this.rotateToSide(parent, style);
      } else {
        this.el.nativeElement.classList.add('origin-center', 'rotate-180')
      }

    }
  }

  private rotateToSide(parent: HTMLElement, style: CSSStyleDeclaration) {
    const classesToAdd = this.appRotate === RotationDirection.RIGHT ?
      [
        'origin-bottom-left',
        '-translate-y-full',
        'rotate-90'
      ] :
      [
        'origin-top-right',
        '-translate-x-full',
        '-rotate-90'
      ];

    this.el.nativeElement.classList.add(...classesToAdd);

    this.setParentDimensions(parent);
    this.setElementDimensions(style, parent);
  }

  private setParentDimensions(parentElement: HTMLElement): void {
    parentElement.style.width = `${parentElement.offsetWidth}px`;
    parentElement.style.height = `${parentElement.offsetHeight}px`;
  }

  private setElementDimensions(style: CSSStyleDeclaration, parentElement: HTMLElement): void {
    style.width = `${parentElement.offsetHeight}px`;
    style.height = `${parentElement.offsetWidth}px`;
  }
}
