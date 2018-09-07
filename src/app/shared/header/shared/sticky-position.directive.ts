import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appStickyPosition]'
})
export class StickyPositionDirective {

  constructor(private el: ElementRef) { }


  @HostListener('mouseenter') public addClass() {
    this.setClass();
  }

  @HostListener('mouseleave') public deleteClass() {
    this.removeClass();
  }

  private setClass() {
    this.el.nativeElement.classList.add('sticky');
  }

  private removeClass() {
    this.el.nativeElement.classList.remove('sticky');
  }
}
