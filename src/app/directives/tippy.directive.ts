import {
  Directive,
  Input,
  OnInit,
  ElementRef,
  AfterViewInit,
} from '@angular/core';
import tippy from 'tippy.js';

@Directive({
  selector: '[tippy]',
})
export class TippyDirective implements OnInit {
  @Input('tippyOptions') public tippyOptions: Object;

  constructor(private el: ElementRef) {
    this.el = el;
  }

  public ngOnInit() {
    tippy(
      this.el.nativeElement,
      this.tippyOptions || {
        animation: 'fade',
        arrow: false,
        delay: [3000, 100],
      }
    );
  }
}
