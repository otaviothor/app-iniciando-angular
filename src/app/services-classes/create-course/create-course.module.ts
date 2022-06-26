import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CreateCourseComponent } from './create-course.component';

@NgModule({
  declarations: [CreateCourseComponent],
  imports: [CommonModule],
  exports: [CreateCourseComponent],
})
export class CreateCourseModule {}
