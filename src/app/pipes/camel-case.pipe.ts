import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'camelCase',
})
export class CamelCasePipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): unknown {
    let wordsInString: string[] = value.split(' ');
    let resultInCamelCaseOfString: string = '';

    for (const word of wordsInString) {
      resultInCamelCaseOfString += this.capitalize(word);
    }

    return resultInCamelCaseOfString;
  }

  capitalize(word: string): string {
    return word.substring(0, 1).toUpperCase() + word.substring(1).toLowerCase();
  }
}
