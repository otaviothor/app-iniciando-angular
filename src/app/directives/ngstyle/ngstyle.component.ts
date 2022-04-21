import { Component } from '@angular/core';

@Component({
  selector: 'app-ngstyle',
  templateUrl: './ngstyle.component.html',
  styleUrls: ['./ngstyle.component.scss'],
})
export class NgstyleComponent {
  public active: boolean = false;
  public fontSize: number = 10;

  constructor() {}

  public toggleActive(): void {
    this.active = !this.active;
  }
}
