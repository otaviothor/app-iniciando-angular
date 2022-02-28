import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-curso',
  templateUrl: './input-property.component.html',
  styleUrls: ['./input-property.component.scss'],
})
export class InputPropertyComponent implements OnInit {
  // se eu passar um param dentro do input, ele referencia como sera o nome
  // do input property no selector
  // @Input('name') courseName = '';
  @Input() courseName = '';

  constructor() {}

  ngOnInit(): void {}
}
