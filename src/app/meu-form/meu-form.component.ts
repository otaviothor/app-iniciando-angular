import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meu-form',
  templateUrl: './meu-form.component.html',
  styleUrls: ['./meu-form.component.scss'],
})
export class MeuFormComponent implements OnInit {
  public inputName: string = 'ABC';
  public person: { name: string; age: number } = {
    name: 'def',
    age: 20,
  };

  constructor() {}

  ngOnInit(): void {}
}
