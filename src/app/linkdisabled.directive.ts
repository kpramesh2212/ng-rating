import {Directive, ElementRef, Input, OnInit, Renderer2} from '@angular/core';
@Directive({
  selector: '[appLinkDisabled]'
})
export class LinkDisabledDirective implements OnInit {
  @Input('appLinkDisabled') disabled = true;

  constructor(private eleRef: ElementRef, private render: Renderer2) {
  }

  ngOnInit() {
    if (this.disabled) {
      this.render.setStyle(this.eleRef.nativeElement, 'pointer-events', 'none');
      this.render.setStyle(this.eleRef.nativeElement, 'cursor', 'default');
      this.render.setStyle(this.eleRef.nativeElement, 'color', 'red');
    }
  }
}
