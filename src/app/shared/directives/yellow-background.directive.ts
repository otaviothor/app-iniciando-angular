import { Directive, ElementRef, Renderer2 } from '@angular/core';

// caso queira que a diretiva funcione em determinado elemento, basta referenciar ele
// antes de dar o nome, como no exemplo abaixo
// @Directive({
//   selector: 'p[appYellowBackground]',
// })

@Directive({
  selector: '[appYellowBackground]',
})
export class YellowBackgroundDirective {
  constructor(
    private readonly _elementRef: ElementRef,
    private readonly _renderer: Renderer2
  ) {
    // esse metodo funciona, porem nao e recomendado pois gera aberturas
    // a vulnerabilidades, em vez disso é recomendado usar o renderer
    // this._elementRef.nativeElement.style.backgroundColor = 'yellow';

    this._renderer.setStyle(
      this._elementRef.nativeElement,
      'background-color',
      'yellow'
    );
  }
}
