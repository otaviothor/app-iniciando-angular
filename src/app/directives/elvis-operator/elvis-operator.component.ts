import { Component } from '@angular/core';

@Component({
  selector: 'app-elvis-operator',
  templateUrl: './elvis-operator.component.html',
  styleUrls: ['./elvis-operator.component.scss'],
})
export class ElvisOperatorComponent {
  public task: { description: string; owner: any } = {
    description: 'something about task',
    owner: null,
  };

  constructor() {}
}
