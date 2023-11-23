// to provide dynamic font color
import { Directive, ElementRef, Input } from '@angular/core';
@Directive({
  selector: '[appBackground]'
})
export class BackgroundDirective {
  @Input() color = '';
  constructor(private el:ElementRef) { 
    console.log(this.el);
  }
  ngOnInit(){
    this.el.nativeElement.style.color=this.color
  }
}
