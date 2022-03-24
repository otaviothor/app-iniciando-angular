import { Component } from '@angular/core';

@Component({
  selector: 'app-meu-form',
  templateUrl: './meu-form.component.html',
  styleUrls: ['./meu-form.component.scss'],
})
export class MeuFormComponent {
  public inputName: string = 'ABC';
  public person: { name: string; age: number } = {
    name: 'def',
    age: 20,
  };

  constructor() {}
}
