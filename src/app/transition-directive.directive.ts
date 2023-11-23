import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appTransitionDirective]'
})
export class TransitionDirectiveDirective {

  constructor(private el:ElementRef) { }
  @HostListener('mouseenter') onMouseEnter() {
    this.image('scale(1.1)');
  }
  @HostListener('mouseleave') onMouseleave() {
    this.image('');
  }
  private image(transform: any) {
    this.el.nativeElement.style.transform = transform;
  }
}
