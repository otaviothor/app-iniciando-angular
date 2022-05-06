import {
  Directive,
  HostBinding,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective implements OnInit {
  @HostListener('mouseenter') onMouseOver() {
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') onMouseOut() {
    this.backgroundColor = this.defaultColor;
  }

  @HostBinding('style.backgroundColor') backgroundColor: string = '';

  // eslint-disable-next-line @angular-eslint/no-input-rename
  @Input('appHighlight') highlightColor: string = 'yellow';
  /**
   * quando informamos um apelido pro Input, podemos passar somente ele no
   * elemento que estamos usando a diretiva
   */
  @Input() defaultColor: string = 'transparent';

  constructor() {}

  ngOnInit() {
    this.backgroundColor = this.defaultColor;
  }
}
