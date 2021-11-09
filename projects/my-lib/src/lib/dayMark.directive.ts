import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDayMark]'
})
export class DayMarkDirective {

  @Input() appDayMark: any;
  @HostListener('mouseenter') onMouseEnter() {
    this.renderer.setStyle(this.el.nativeElement, 'hover', 'red');
  }
  constructor(
    private el: ElementRef,
    private renderer: Renderer2) { }

  ngOnChanges() {
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', this.appDayMark);
  }
}