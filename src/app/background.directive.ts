import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appBackground]'
})
export class BackgroundDirective {
  @Input() color = '';
  constructor(private el:ElementRef) { 
    console.log(this.el);
    this.el.nativeElement.style.font = '#808080'
  }
  ngOnInit(){
    this.el.nativeElement.style.color=this.color
  }
}
