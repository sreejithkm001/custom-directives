// to provide dynamic hover effect to html tags
import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHoverDirective]'
})
export class HoverDirectiveDirective {
  @Input() color = '';
  constructor(private el: ElementRef) {}
  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.color);
  }
  @HostListener('mouseleave') onMouseleave() {
    this.highlight('');
  }
  private highlight(color: any) {
    this.el.nativeElement.style.color = color;
  }
}
