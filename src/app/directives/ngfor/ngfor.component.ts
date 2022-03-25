import { Component } from '@angular/core';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.scss'],
})
export class NgforComponent {
  public courses: string[] = ['Angular 2+', 'React', 'Java', 'C#', 'Node.js'];

  constructor() {}
}
