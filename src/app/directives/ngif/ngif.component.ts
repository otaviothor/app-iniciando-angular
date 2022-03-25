import { Component } from '@angular/core';

@Component({
  selector: 'app-ngif',
  templateUrl: './ngif.component.html',
  styleUrls: ['./ngif.component.scss'],
})
export class NgifComponent {
  showCourses: boolean = false;

  constructor() {}

  public handleToggleCourses(): void {
    this.showCourses = !this.showCourses;
  }
}
