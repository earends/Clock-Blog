import { Directive ,ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appBold]'
})
export class BoldDirective {

  constructor(private el: ElementRef) { }

  

}
