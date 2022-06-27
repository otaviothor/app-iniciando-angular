import { Component, OnInit } from '@angular/core';
import { CoursesService } from 'src/app/services/courses/courses.service';

@Component({
  selector: 'app-receive-created-course',
  templateUrl: './receive-created-course.component.html',
  styleUrls: ['./receive-created-course.component.scss'],
})
export class ReceiveCreatedCourseComponent implements OnInit {
  public course: string = '';

  constructor(private readonly coursesService: CoursesService) {}

  ngOnInit(): void {
    this.coursesService.emitCreatedCourse.subscribe((data) => {
      this.course = data;
    });
  }
}
