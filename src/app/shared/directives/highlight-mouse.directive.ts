import {
  Directive,
  HostBinding,
  HostListener,
  // ElementRef,
  // Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appHighlightMouse]',
})
export class HighlightMouseDirective {
  @HostListener('mouseenter') onMouseOver() {
    // this._renderer.setStyle(
    //   this._elementRef.nativeElement,
    //   'background-color',
    //   'yellow'
    // );

    this.backgroundColor = 'yellow';
  }

  @HostListener('mouseleave') onMouseOut() {
    // this._renderer.setStyle(
    //   this._elementRef.nativeElement,
    //   'background-color',
    //   'transparent'
    // );

    this.backgroundColor = 'transparent';
  }

  /**
   * caso fizermos uso do metadado HostBinding, nao necessitamos de
   * usar o ElementRef e o Renderer2
   */
  @HostBinding('style.backgroundColor') backgroundColor: string = '';

  /**
   * caso precise fazer alguma manipulacao antes de setar a variavel
   * no HostListener, basta utiliza o getter e setter do ts
   */
  // private backgroundColor: string = '';
  // @HostBinding('style.backgroundColor') get setColor(): string {
  //   codigo extra
  //   return this.backgroundColor;
  // }

  constructor() {
    // private readonly _elementRef: ElementRef,
    // private readonly _renderer: Renderer2
  }
}
