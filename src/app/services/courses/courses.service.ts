import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  private courses: string[] = ['Java', 'Angular', 'React'];

  constructor() {
    console.log('coursesService');
  }

  getCourses(): string[] {
    return this.courses;
  }

  addCourse(course: string): string[] {
    this.courses.push(course);
    return this.getCourses();
  }
}
