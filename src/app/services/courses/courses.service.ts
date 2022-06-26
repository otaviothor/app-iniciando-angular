import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  constructor() {
    console.log('coursesService');
  }

  getCourses(): string[] {
    return ['Java', 'Angular', 'React'];
  }
}
