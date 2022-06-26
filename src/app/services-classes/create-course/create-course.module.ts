import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateCourseComponent } from './create-course.component';
import { CoursesService } from 'src/app/services/courses/courses.service';

@NgModule({
  declarations: [CreateCourseComponent],
  imports: [CommonModule],
  exports: [CreateCourseComponent],
  providers: [CoursesService],
})
export class CreateCourseModule {}
