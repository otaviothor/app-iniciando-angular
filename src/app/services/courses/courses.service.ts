import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  emitCreatedCourse = new EventEmitter<string>();
  static emitCreatedCourseWithMoreThanOneInstances = new EventEmitter<string>();

  private courses: string[] = ['Java', 'Angular', 'React'];

  constructor() {
    console.log('coursesService');
  }

  getCourses(): string[] {
    return this.courses;
  }

  addCourse(course: string): string[] {
    this.courses.push(course);
    this.emitCreatedCourse.emit(course);
    CoursesService.emitCreatedCourseWithMoreThanOneInstances.emit(course);
    return this.getCourses();
  }
}
