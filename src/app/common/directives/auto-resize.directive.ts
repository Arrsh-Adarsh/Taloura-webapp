import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: 'textarea[autoResize]'
})
export class AutoResizeDirective {

  constructor(private element: ElementRef) { }

  @HostListener('input')
  onInput(): void {
    let textarea = this.element.nativeElement as HTMLTextAreaElement;
    
    const maxHeight = window.innerHeight * 0.7;
    textarea.style.maxHeight = `${maxHeight}px`;
    textarea.style.height = Math.min(textarea.scrollHeight, maxHeight) + 'px';
  }

}
