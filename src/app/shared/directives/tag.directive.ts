import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appTag]'
})
export class TagDirective {
  @Input() @HostBinding('style.background-color') tagBgColor = '#faefe3'
  @Input() @HostBinding('style.color') tagColor = '#c1516a'
  @Input() @HostBinding('style.font-size') tagSize = '0.8rem'
  @Input() @HostBinding('style.padding') tagPadding = '6px'
  @Input() @HostBinding('style.border-radius') tagRadius = '0';
}