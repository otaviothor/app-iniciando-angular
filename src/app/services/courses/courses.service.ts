import { EventEmitter, Injectable } from '@angular/core';
import { LogService } from '../log/log.service';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  emitCreatedCourse = new EventEmitter<string>();
  static emitCreatedCourseWithMoreThanOneInstances = new EventEmitter<string>();

  private courses: string[] = ['Java', 'Angular', 'React'];

  constructor(private readonly logService: LogService) {
    console.log('coursesService');
  }

  getCourses(): string[] {
    this.logService.logger('getCourses from CoursesService');
    return this.courses;
  }

  addCourse(course: string): string[] {
    this.logService.logger(`addCourse ${course} from CoursesService`);
    this.courses.push(course);
    this.emitCreatedCourse.emit(course);
    CoursesService.emitCreatedCourseWithMoreThanOneInstances.emit(course);
    return this.getCourses();
  }
}
