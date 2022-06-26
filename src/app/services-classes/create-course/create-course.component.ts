import { Component, OnInit } from '@angular/core';
import { CoursesService } from 'src/app/services/courses/courses.service';

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.scss'],
})
export class CreateCourseComponent implements OnInit {
  public courses: string[] = [];

  constructor(private readonly coursesService: CoursesService) {}

  ngOnInit(): void {
    this.courses = this.coursesService.getCourses();
  }
}
