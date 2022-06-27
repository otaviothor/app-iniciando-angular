import { Component, OnInit } from '@angular/core';
import { CoursesService } from 'src/app/services/courses/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  public courses: string[] = [];
  public course: string = '';

  constructor(private readonly coursesService: CoursesService) {}

  ngOnInit() {
    this.courses = this.coursesService.getCourses();

    CoursesService.emitCreatedCourseWithMoreThanOneInstances.subscribe(
      (data) => {
        this.course = data;
      }
    );
  }
}
