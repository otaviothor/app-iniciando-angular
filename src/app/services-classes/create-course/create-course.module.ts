import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReceiveCreatedCourseComponent } from '../receive-created-course/receive-created-course.component';
import { CreateCourseComponent } from './create-course.component';

@NgModule({
  declarations: [CreateCourseComponent, ReceiveCreatedCourseComponent],
  imports: [CommonModule],
  exports: [CreateCourseComponent],
})
export class CreateCourseModule {}
