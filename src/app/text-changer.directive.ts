import { Directive, ElementRef } from '@angular/core';
import { element } from 'protractor';

@Directive({
  selector: '[appTextChanger]'
})
export class TextChangerDirective {

  constructor(Element: ElementRef) {
    Element.nativeElement.innerText = 'Home Page';
  }

}
